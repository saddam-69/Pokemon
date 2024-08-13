const User = require('../models/User');

// Fonction pour créer un nouvel utilisateur
exports.createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: 'Erreur de création' });
    }
};

// Fonction pour récupérer un utilisateur avec son équipe
exports.getUserWithTeam = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).populate('equipe');
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur' });
    }
};
