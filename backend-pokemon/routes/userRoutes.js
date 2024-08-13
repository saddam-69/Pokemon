const express = require('express');
const router = express.Router();
const { createUser, getUserWithTeam } = require('../controllers/userController');

// Route pour créer un nouvel utilisateur
router.post('/', createUser);

// Route pour récupérer un utilisateur avec son équipe
router.get('/:id', getUserWithTeam);

module.exports = router;
