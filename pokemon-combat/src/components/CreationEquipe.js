import React, { useState, useEffect } from 'react';
import { obtenirPokemons, creerUtilisateur } from '../services/servicePokeAPI';

// Composant fonctionnel pour la création d'équipe
const CreationEquipe = ({ setEquipe }) => {
    const [pokemons, setPokemons] = useState([]);
    const [equipeLocale, setEquipeLocale] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await obtenirPokemons();
            setPokemons(data);
        };
        fetchData();
    }, []);

    const ajouterPokemonEquipe = (pokemon) => {
        if (equipeLocale.length < 6) {
            setEquipeLocale([...equipeLocale, pokemon]);
        }
    };

    const sauvegarderEquipe = async () => {
        // Création d'un utilisateur fictif pour la démo
        const userData = {
            username: 'UtilisateurTest',
            password: 'MotDePasse123',
            equipe: equipeLocale.map((pokemon) => pokemon.id),
        };
        const utilisateur = await creerUtilisateur(userData);
        setEquipe(utilisateur.equipe);
    };

    return (
        <div className="creation-equipe">
            <h2>Créer votre Équipe</h2>
            <div className="liste-pokemons">
                {pokemons.map((pokemon, index) => (
                    <div key={index}>
                        <p>{pokemon.name}</p>
                        <button onClick={() => ajouterPokemonEquipe(pokemon)}>Ajouter</button>
                    </div>
                ))}
            </div>
            <h3>Votre Équipe</h3>
            <ul>
                {equipeLocale.map((pokemon, index) => (
                    <li key={index}>{pokemon.name}</li>
                ))}
            </ul>
            <button onClick={sauvegarderEquipe}>Sauvegarder l'Équipe</button>
        </div>
    );
};

export default CreationEquipe;
