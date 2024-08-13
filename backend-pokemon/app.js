const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();

// Connexion à MongoDB
connectDB();

// Création de l'application Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Définition des routes
app.use('/api/pokemons', require('./routes/pokemonRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
