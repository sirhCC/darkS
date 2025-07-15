const express = require('express');
const router = express.Router();
const combatController = require('../controllers/combatController');

router.post('/:username/start', combatController.startCombat);
router.post('/:username/player-attack', combatController.playerAttack);
router.post('/:username/enemy-attack', combatController.enemyAttack);
router.post('/:username/end', combatController.endCombat);

module.exports = router;
