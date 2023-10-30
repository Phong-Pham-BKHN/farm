const express = require('express')
const router = express.Router()
const VungTrongController = require('../app/controllers/VungTrongController')
router.use('/', VungTrongController.index)
module.exports = router