const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.get('/', itemController.getAllItems);
router.post('/', itemController.addItem);
router.get('/:id', itemController.getItemById);
router.put('/:id', itemController.updateItem);

module.exports = router;
