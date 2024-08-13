const express = require('express');
const router = express.Router();
const { getPokemons, createPokemon } = require('../controllers/pokemonController');

// Route pour récupérer tous les Pokémon
router.get('/', getPokemons);

// Route pour créer un nouveau Pokémon
router.post('/', createPokemon);

module.exports = router;
