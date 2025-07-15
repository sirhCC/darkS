// Example route: player endpoints
const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');

router.get('/welcome', playerController.getWelcome);
router.get('/', playerController.getAllPlayers);
router.post('/', playerController.addPlayer);
router.get('/:username', playerController.getPlayerByUsername);
router.put('/:username', playerController.updatePlayer);

module.exports = router;
