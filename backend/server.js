const OpenAI = require('openai');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const openai = new OpenAI(process.env.OPENAI_API_KEY);

// Init du serveur express
const app = express();
const port = 3000; // Port sur lequel le serveur va écouter
app.use(bodyParser.json()); // Pour parser les JSON
app.use(cors()); // Pour gérer les politiques CORS

// Connexion à MongoDB
const mongoUri = process.env.MONGODB_URI;
mongoose.connect(mongoUri);
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

//schéma article
const articleSchema = new mongoose.Schema({
  titre: String,
  resume: String,
  contenu: String,
  auteur: String,
  dateCreation: Date,
  photo: String,
  mp3: String
});

const Article = mongoose.model('Article', articleSchema);

// route api
app.post('/api/articles', async (req, res) => {

  if(!req.body.titre || !req.body.auteur) {
    return res.status(400).send('Titre et auteur requis');
  }

  let response = await openai.chat.completions.create({
    messages: [{"role": "system", "content": "Voici le titre de l'article : "+ req.body.titre +". écrit un résumé humoristique de cet article, en utilisant des jeux de mots, des blagues légères et un ton décalé pour rendre le sujet amusant tout en gardant les informations principales. Fais en sorte que le lecteur puisse rire tout en comprenant de quoi il s'agit."}],
    model: "gpt-3.5-turbo",
    });
  let resume = response.choices[0].message.content;

  response = await openai.chat.completions.create({
    messages: [{"role": "system", "content": "Voici le résumé de l'article : "+ resume +". Imagine que cet article est écrit par un journaliste spécialisé dans l'humour et les jeux de mots. Rédige le contenu de l'article en gardant le ton humoristique et décalé du résumé, tout en apportant des informations complémentaires sur le sujet. Assure-toi que le ton reste léger et divertissant, tout en transmettant les points clés de l'article de manière humoristique. N'oublie pas d'intégrer des anecdotes imaginaires et des commentaires sarcastiques pour captiver le lecteur avec humour."}],
    model: "gpt-3.5-turbo",
    });
  let contenu = response.choices[0].message.content;

  response = await openai.images.generate({
    model: "dall-e-2",
    prompt: "a white siamese cat",
    n: 1,
    size: "1024x1024",
    });
  let photo = response.data[0].url;
  photo = downloadImageAsBase64(imageUrl);

  response = await openai.chat.completions.create([{
    messages: {"role": "system", "content": "You are a helpful assistant."},
    model: "gpt-3.5-turbo",
    }]);
  let tts = response.choices[0].message.content;

  const articleData = {
    titre: req.body.titre,
    resume: resume,
    contenu: contenu,
    auteur: req.body.auteur,
    dateCreation: new Date(),
    photo: photo,
    mp3: tts,
  };

  try {
      const newArticle = new Article();
      const article = await newArticle.save();
      res.status(200).send(article);
  } catch (err) {
      res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

async function downloadImageAsBase64(imageUrl) {
  const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
  const base64Image = Buffer.from(response.data, 'binary').toString('base64');
  return base64Image;
}
