const dungeonProgressService = require('../services/dungeonProgressService');

exports.movePlayer = async (req, res, next) => {
  try {
    const state = await dungeonProgressService.movePlayer(req.params.username, req.body.direction);
    if (!state) return res.status(404).json({ error: 'Player not found' });
    res.json(state);
  } catch (e) {
    next(e);
  }
};

exports.revealRoom = async (req, res, next) => {
  try {
    const state = await dungeonProgressService.revealRoom(req.params.username, req.body.roomInfo);
    if (!state) return res.status(404).json({ error: 'Player not found' });
    res.json(state);
  } catch (e) {
    next(e);
  }
};

exports.getDungeonState = async (req, res, next) => {
  try {
    const state = await dungeonProgressService.getDungeonState(req.params.username);
    if (!state) return res.status(404).json({ error: 'Player not found' });
    res.json(state);
  } catch (e) {
    next(e);
  }
};
