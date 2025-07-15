// Example controller: handles player endpoints
const playerService = require('../services/playerService');

exports.getWelcome = (req, res) => {
  res.send(playerService.getWelcomeMessage());
};

exports.getAllPlayers = async (req, res, next) => {
  try {
    const players = await playerService.getAllPlayers();
    res.json(players);
  } catch (e) {
    next(e);
  }
};

exports.addPlayer = async (req, res, next) => {
  try {
    const player = await playerService.addPlayer(req.body);
    res.status(201).json(player);
  } catch (e) {
    next(e);
  }
};

exports.getPlayerByUsername = async (req, res, next) => {
  try {
    const player = await playerService.getPlayerByUsername(req.params.username);
    if (!player) return res.status(404).json({ error: 'Player not found' });
    res.json(player);
  } catch (e) {
    next(e);
  }
};

exports.updatePlayer = async (req, res, next) => {
  try {
    const player = await playerService.updatePlayer(req.params.username, req.body);
    if (!player) return res.status(404).json({ error: 'Player not found' });
    res.json(player);
  } catch (e) {
    next(e);
  }
};
