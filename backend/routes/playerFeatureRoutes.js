const express = require('express');
const router = express.Router();
const playerFeatureController = require('../controllers/playerFeatureController');

router.get('/:username/stats', playerFeatureController.getStats);
router.put('/:username/stats', playerFeatureController.updateStats);
router.post('/:username/save', playerFeatureController.saveGameState);
router.get('/:username/load', playerFeatureController.loadGameState);

module.exports = router;
