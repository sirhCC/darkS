const express = require('express');
const router = express.Router();
const dungeonProgressController = require('../controllers/dungeonProgressController');

router.post('/:username/move', dungeonProgressController.movePlayer);
router.post('/:username/reveal', dungeonProgressController.revealRoom);
router.get('/:username/state', dungeonProgressController.getDungeonState);

module.exports = router;
