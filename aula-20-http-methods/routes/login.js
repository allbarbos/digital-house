const express = require('express');
const router = express.Router();

const controller = require('../controller/login')

// /login
router.get('/', controller.index);

// /login/entrar
router.post('/entrar', controller.submit);

module.exports = router;