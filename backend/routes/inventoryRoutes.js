const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

router.get('/:username', inventoryController.getInventory);
router.post('/:username', inventoryController.addItemToInventory);
router.delete('/:username/:itemId', inventoryController.removeItemFromInventory);

module.exports = router;
