import express from 'express';
import sons from './sons.js'; // Importer les données de sons.js

// Étape 2: Créer une instance d'application Express
const app = express();

// Étape 3: Définir les routes
app.get('/songs', (req, res) => {
    res.json(sons); // Renvoyer toutes les chansons
});

app.get('/song/:id', (req, res) => {
    const id = req.params.id;
    if (id >= 0 && id < sons.length) {
        res.json(sons[id]);
    } else {
        res.status(404).send('Chanson non trouvée');
    }
});

app.get('/cover/:id', (req, res) => {
    const id = req.params.id;
    if (id >= 0 && id < sons.length) {
        res.sendFile(path.join(__dirname, sons[id].cover));
    } else {
        res.status(404).send('Couverture non trouvée');
    }
});

// Étape 4: Lancer le serveur
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Serveur en écoute sur le port ${port}`));