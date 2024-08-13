// Importation des bibliothèques nécessaires
import React from 'react';
import { Link } from 'react-router-dom';

// Composant fonctionnel pour la page d'accueil
const PageAccueil = () => {
    return (
        <div className="page-accueil">
            <h1>Bienvenue dans le Jeu Pokémon</h1>
            <p>Commencez par créer votre équipe de Pokémon pour le combat.</p>
            {/* Lien vers la page de création d'équipe */}
            <Link to="/creation-equipe">
                <button>Démarrer</button>
            </Link>
        </div>
    );
};

export default PageAccueil;

