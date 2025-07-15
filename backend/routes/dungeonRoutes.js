const express = require('express');
const router = express.Router();
const dungeonController = require('../controllers/dungeonController');

router.get('/', dungeonController.getAllDungeons);
router.post('/', dungeonController.addDungeon);
router.get('/:id', dungeonController.getDungeonById);
router.put('/:id', dungeonController.updateDungeon);

module.exports = router;
