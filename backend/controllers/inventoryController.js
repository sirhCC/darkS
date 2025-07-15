const playerService = require('../services/playerService');

exports.getInventory = async (req, res, next) => {
  try {
    const inventory = await playerService.getInventory(req.params.username);
    if (!inventory) return res.status(404).json({ error: 'Player not found' });
    res.json(inventory);
  } catch (e) {
    next(e);
  }
};

exports.addItemToInventory = async (req, res, next) => {
  try {
    const inventory = await playerService.addItemToInventory(req.params.username, req.body);
    if (!inventory) return res.status(404).json({ error: 'Player not found' });
    res.json(inventory);
  } catch (e) {
    next(e);
  }
};

exports.removeItemFromInventory = async (req, res, next) => {
  try {
    const inventory = await playerService.removeItemFromInventory(req.params.username, req.params.itemId);
    if (!inventory) return res.status(404).json({ error: 'Player or item not found' });
    res.json(inventory);
  } catch (e) {
    next(e);
  }
};
