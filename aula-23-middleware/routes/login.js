const express = require('express');
const { body } = require('express-validator');
const controller = require('../controller/login')
const middlewareLogTime = require('../middleware/log-time')

const router = express.Router();

const cadastroValidacoes = [
    body('email')
        .notEmpty()
        .withMessage('e-mail não pode ser vazio')
        .isEmail()
        .withMessage('e-mail deve ser válido'),
    body('password')
        .isLength({ min: 5 })
        .withMessage('senha deve ter no minimo 5 caracteres'),
    body('confirm-password')
        .isLength({ min: 5 })
        .withMessage('confirmação de senha deve ter no minimo 5 caracteres'),
]

// GET /login
router.get('/', controller.index);

// POST /login/entrar
router.post('/entrar', controller.submit);

// GET /login/cadastro
router.get('/cadastro', controller.cadastro);

// POST /login/cadastro
router.post(
    '/cadastro',
    middlewareLogTime.logTime,
    cadastroValidacoes,
    controller.novoCadastro
);

module.exports = router;