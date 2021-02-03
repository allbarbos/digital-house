const express = require('express')

const controller = require('../controllers/index-controller')

const router = express.Router()

router.get('/', controller.getIndex)

module.exports = router