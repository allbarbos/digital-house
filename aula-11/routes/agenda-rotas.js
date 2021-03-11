const express = require('express')
const controller = require('../controllers/agenda-controller')

const router = express.Router()

router.get('/', controller.buscaContatos)
router.get('/:uuid', controller.buscaContatosPorUuid)

module.exports = router