const Pokemon = require('../models/Pokemon');

// Fonction pour récupérer tous les Pokémon
exports.getPokemons = async (req, res) => {
    try {
        const pokemons = await Pokemon.find();
        res.json(pokemons);
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

// Fonction pour créer un nouveau Pokémon
exports.createPokemon = async (req, res) => {
    try {
        const newPokemon = new Pokemon(req.body);
        await newPokemon.save();
        res.status(201).json(newPokemon);
    } catch (err) {
        res.status(400).json({ message: 'Erreur de création' });
    }
};
