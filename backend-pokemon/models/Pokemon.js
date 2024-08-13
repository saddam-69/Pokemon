const mongoose = require('mongoose');

// Schéma pour un Pokémon
const PokemonSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    type: { type: String, required: true },
    pv: { type: Number, required: true },
    attaque: { type: Number, required: true },
    defense: { type: Number, required: true },
    vitesse: { type: Number, required: true },
});

module.exports = mongoose.model('Pokemon', PokemonSchema);
