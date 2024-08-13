import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PagePrincipale from './pages/PagePrincipale';
import PageCombat from './pages/PageCombat';

// Composant racine de l'application
function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    {/* Route pour la page d'accueil */}
                    <Route exact path="/" component={PagePrincipale} />
                    {/* Route pour la page de combat */}
                    <Route path="/combat" component={PageCombat} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;

