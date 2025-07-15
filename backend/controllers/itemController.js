const itemService = require('../services/itemService');

exports.getAllItems = async (req, res, next) => {
  try {
    const items = await itemService.getAllItems();
    res.json(items);
  } catch (e) {
    next(e);
  }
};

exports.addItem = async (req, res, next) => {
  try {
    const item = await itemService.addItem(req.body);
    res.status(201).json(item);
  } catch (e) {
    next(e);
  }
};

exports.getItemById = async (req, res, next) => {
  try {
    const item = await itemService.getItemById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Item not found' });
    res.json(item);
  } catch (e) {
    next(e);
  }
};

exports.updateItem = async (req, res, next) => {
  try {
    const item = await itemService.updateItem(req.params.id, req.body);
    if (!item) return res.status(404).json({ error: 'Item not found' });
    res.json(item);
  } catch (e) {
    next(e);
  }
};
