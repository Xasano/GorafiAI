const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

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
    try {
        const newArticle = new Article(req.body);
        const article = await newArticle.save();
        res.status(200).send(article);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
