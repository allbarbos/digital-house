const express = require('express')
const router = express.Router()

const controller = require('../controller/pessoas')

// GET /pessoas
router.get('/', controller.listaPessoas)

// GET /pessoas/:id
router.get('/:id', controller.buscaPessoaPorId)

module.exports = router
