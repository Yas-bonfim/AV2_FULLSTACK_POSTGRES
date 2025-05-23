const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rota de registro
router.post('/register', (req, res, next) => {
    console.log('A rota /register foi acessada');
    next();
}, authController.register);

// Rota de login
router.post('/login', authController.login);

// Rota protegida de exemplo
router.get('/protected', authMiddleware, authController.protected);

module.exports = router;
