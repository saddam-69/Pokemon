import axios from 'axios';

// URL de base de l'API PokeAPI
const URL_API_POKE = 'https://pokeapi.co/api/v2';
const URL_API_BACKEND = 'http://localhost:5000/api';

// Fonction pour récupérer la liste des Pokémon depuis la PokeAPI
export const obtenirPokemons = async () => {
    const reponse = await axios.get(`${URL_API_POKE}/pokemon?limit=150`);
    return reponse.data.results;
};

// Fonction pour récupérer les détails d'un Pokémon spécifique
export const obtenirDetailsPokemon = async (url) => {
    const reponse = await axios.get(url);
    return reponse.data;
};

// Fonction pour créer un nouvel utilisateur dans le backend
export const creerUtilisateur = async (userData) => {
    const reponse = await axios.post(`${URL_API_BACKEND}/users`, userData);
    return reponse.data;
};

// Fonction pour récupérer un utilisateur avec son équipe
export const obtenirUtilisateurAvecEquipe = async (userId) => {
    const reponse = await axios.get(`${URL_API_BACKEND}/users/${userId}`);
    return reponse.data;
};
