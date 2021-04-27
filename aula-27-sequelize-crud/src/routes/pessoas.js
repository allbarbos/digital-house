const express = require('express')
const router = express.Router()

const controller = require('../controller/pessoas')

// GET /pessoas
router.get('/', controller.listaPessoas)

// GET /pessoas/ativas
router.get('/ativas', controller.buscaPessoaAtiva)

// GET /pessoas/:id
router.get('/:id', controller.buscaPessoaPorId)

module.exports = router
