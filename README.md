# GorafiAI

Bienvenue dans le projet GorafAI! L'objectif de ce projet consiste a intégrer l'IA dans la génération de prompt sous diverses formes (texte, image, audio).
GorafAI est un projet universitaire où l'objectif est de réaliser un site web journalistique qui ne génère que des faux articles sur le ton de l'humour.
Sur ce site on peux créer des articles via un titre et le nom de l'auteur ou visionner des articles précédemment créés.

## 👥 Membres du groupe

- **Bastien LEFUMEUX**
- **Mathéo Vasseur**

## 📚 Table des matières

1. [🛠️ Mise en place de l'environnement de développement](#dev-setup)
2. [🏗️ Architecture du système](#system-architecture)
3. [Possibilités d'évolution](#evol)
4. [Source des travaux qui ont été repris dans notre projet](#source)

## <span id="dev-setup">🛠️ Mise en place de l'environnement de développement</span>
Pour configurer votre environnement de développement, suivez les étapes ci-dessous :

1. Clonez le dépôt :
```bash
git clone https://github.com/Xasano/GorafiAI.git
```

2. Naviguer jusqu'au dossier backend du projet et insérer votre clé d'api dans un fichier .env :
```bash
cd ./backend
touch .env
nano .env
```
La clé API doit être déclaré de cette manière :
```bash
OPENAI_API_KEY=votre_clé
```

3. Se remettre à la racine du projet :
```bash
cd ..
```

4. Lancer le docker-compose :
```bash
docker-compose up --build
```

Si vous avez bien suivi ces étpaes, le projet devrait se lancer. Le site web est accessible à l'adresse en local : <p href="localhost:4200/">http://localhost:4200/</p>

## <span id="system-architecture">🏗️ Architecture du système</span>

Le système est décomposé en 3 services :
- **🌐 Site Angular** : Interface utilisateur développée avec Angular.
- **🏠 Serveur Express (NodeJs)** : Backend de l'application où les requêtes pour open AI sont faites et où sont stockés les .mp3 généré par l'api d'OPENAI agit comme middleware entre le site web et la base de données
- **🤝 Base de donnée MongoDB** : Base de donnée qui stocke sous forme de document les articles

## <span id="evol">Possibilités d'évolution</span>

Les possibilités d'évolutions sont nombreuses mais voici une liste non-exhaustive de ce qu'on pourrait ajouter
- Ajout d'une barre de recherche pour trouver un article
- Faire une page d'accueil digne de son nom
- Mettre en place un loading lorsqu'on génère un article et lorsqu'on attend que les articles sur la page /articles (Si on a beaucoup d'articles stocké ça peut prendre du temps)
- Fusionner le service express avec angular pour avoir un seul service qui gère le backend et le frontend
- Si un utilisateur envoie un prompt qui n'est pas accepté par OPENAI, renvoyer une erreur à l'utilisateur

## <span id="source">Source des travaux qui ont été repris dans notre projet</span>
La page erreur 404 a été repris de ce projet sur codepen.io : https://codepen.io/raichutd/pen/JjmKjbP
