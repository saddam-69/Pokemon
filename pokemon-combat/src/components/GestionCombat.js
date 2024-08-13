import React, { useState } from 'react';
import { obtenirDetailsPokemon } from '../services/servicePokeAPI';

// Composant fonctionnel pour la gestion des combats
const GestionCombat = ({ equipe }) => {
    const [combatLog, setCombatLog] = useState([]);

    const simulerCombat = async (pokemon1, pokemon2) => {
        const detailsPokemon1 = await obtenirDetailsPokemon(pokemon1.url);
        const detailsPokemon2 = await obtenirDetailsPokemon(pokemon2.url);

        let gagnant;
        if (detailsPokemon1.stats[0].base_stat > detailsPokemon2.stats[0].base_stat) {
            gagnant = pokemon1.name;
        } else if (detailsPokemon1.stats[0].base_stat < detailsPokemon2.stats[0].base_stat) {
            gagnant = pokemon2.name;
        } else {
            gagnant = 'Aucun, c\'est un match nul!';
        }

        setCombatLog([...combatLog, `${pokemon1.name} combat ${pokemon2.name} - Gagnant: ${gagnant}`]);
    };

    return (
        <div className="gestion-combat">
            <h2>Simulateur de Combat</h2>
            <p>Sélectionnez deux Pokémon pour un combat.</p>
            <div className="combat-zone">
                {equipe.length >= 2 && (
                    <button onClick={() => simulerCombat(equipe[0], equipe[1])}>
                        Combattre {equipe[0].name} contre {equipe[1].name}
                    </button>
                )}
            </div>
            <h3>Journal de Combat</h3>
            <ul>
                {combatLog.map((log, index) => (
                    <li key={index}>{log}</li>
                ))}
            </ul>
        </div>
    );
};

export default GestionCombat;
