import React, { useState } from 'react';
import CreationEquipe from '../components/CreationEquipe';
import GestionCombat from '../components/GestionCombat';

// Composant fonctionnel pour la page de combat
const PageCombat = () => {
    const [equipe, setEquipe] = useState([]);

    return (
        <div className="page-combat">
            <CreationEquipe setEquipe={setEquipe} />
            {equipe.length > 0 && <GestionCombat equipe={equipe} />}
        </div>
    );
};

export default PageCombat;
