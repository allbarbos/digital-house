const express = require('express');
const router = express.Router();

const controller = require('../controller/sequelize')

// GET /sequelize
router.get('/', controller.index);

module.exports = router;