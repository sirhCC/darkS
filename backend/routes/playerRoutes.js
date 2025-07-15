// Example route: player endpoints
const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');

router.get('/welcome', playerController.getWelcome);

module.exports = router;
