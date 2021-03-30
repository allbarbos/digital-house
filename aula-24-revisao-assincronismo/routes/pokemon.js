const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/pokemon')

// GET /pokemon
router.get('/', ctrl.index);

// GET /pokemon/:nome/detalhes
router.get('/:nome/detalhes', ctrl.detalhes);

// GET /pokemon/seu-pokemon
router.get('/seu-pokemon', ctrl.seuPokemon);

module.exports = router;
