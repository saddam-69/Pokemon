Pokémon Combat
Description
Le projet Pokémon Combat est une application web qui simule des combats de Pokémon en utilisant les données de l'API PokeAPI. Les utilisateurs peuvent créer 
une équipe de Pokémon, et engager des combats en utilisant les statistiques et compétences des Pokémon. Le projet est développé avec ReactJS pour le frontend et 
Node.js avec Express pour le backend, connectés à une base de données MongoDB pour la gestion des utilisateurs et des équipes.

Fonctionnalités
--> Page d'accueil : Présentation de l'application et introduction.
--> Création d'équipe : Les utilisateurs peuvent sélectionner et ajouter des Pokémon à leur équipe à partir des données de l'API PokeAPI.
--> Gestion des combats : Les utilisateurs peuvent engager des combats entre leurs Pokémon en utilisant leurs statistiques.
--> Backend API : Gestion des utilisateurs et des équipes avec une API Node.js et MongoDB.

Technologies Utilisées
--> Frontend : ReactJS, Axios, React Router
--> Backend : Node.js, Express, MongoDB, Mongoose
--> API externe : PokeAPI
--> Outils de développement : Visual Studio Code, Git, GitHub

Prérequis
Avant de commencer, assurez-vous d'avoir installé les éléments suivants :
--> Node.js (v14.x ou supérieur)
--> MongoDB (local ou via MongoDB Atlas)
--> Git

Installation
1. Cloner le dépôt
Clonez ce dépôt GitHub sur votre machine locale :
--> git clone https://github.com/saddam-69/Pokemon.git
    cd pokemon-combat

2. Installation des dépendances
-Frontend
--> cd pokemon-combat
    npm install
   
-Backend
--> cd backend-pokemon
    npm install
    
3. Configuration des variables d'environnement
Créez un fichier <.env> dans le dossier backend-pokemon avec les variables suivantes :
--> MONGO_URI=<votre_url_mongodb>
    PORT=5000
Remplacez <votre_url_mongodb> par l'URL de votre base de données MongoDB.

4. Démarrage de l'application
Démarrer le Backend
--> cd backend-pokemon
    node app.js

Démarrer le Frontend
--> cd pokemon-combat
    npm start
L'application sera accessible à l'adresse http://localhost:3000.

Utilisation
1-- Création d'une équipe : Accédez à la page de création d'équipe, choisissez vos Pokémon préférés, et ajoutez-les à votre équipe.
2-- Combats : Une fois l'équipe créée, engagez des combats et visualisez les résultats.
3-- Gestion des utilisateurs : Les informations des utilisateurs et des équipes sont sauvegardées dans la base de données MongoDB.

Dépannage
Problèmes de connexion MongoDB : Vérifiez que votre instance MongoDB est en cours d'exécution et que l'URI est correctement configurée dans le fichier .env.
Erreur d'installation des dépendances : Assurez-vous que toutes les dépendances sont correctement installées en exécutant npm install dans les dossiers pokemon-combat 
et backend-pokemon.

Contribuer
Les contributions sont les bienvenues! Si vous souhaitez améliorer l'application, veuillez forker le dépôt, créer une nouvelle branche, apporter vos modifications et 
soumettre une pull request.
