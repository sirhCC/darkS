const playerService = require('../services/playerService');

exports.getStats = async (req, res, next) => {
  try {
    const stats = await playerService.getStats(req.params.username);
    if (!stats) return res.status(404).json({ error: 'Player not found' });
    res.json(stats);
  } catch (e) {
    next(e);
  }
};

exports.updateStats = async (req, res, next) => {
  try {
    const stats = await playerService.updateStats(req.params.username, req.body);
    if (!stats) return res.status(404).json({ error: 'Player not found' });
    res.json(stats);
  } catch (e) {
    next(e);
  }
};

exports.saveGameState = async (req, res, next) => {
  try {
    const state = await playerService.saveGameState(req.params.username, req.body);
    if (!state) return res.status(404).json({ error: 'Player not found' });
    res.json(state);
  } catch (e) {
    next(e);
  }
};

exports.loadGameState = async (req, res, next) => {
  try {
    const state = await playerService.loadGameState(req.params.username);
    if (!state) return res.status(404).json({ error: 'Player not found' });
    res.json(state);
  } catch (e) {
    next(e);
  }
};
