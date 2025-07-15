// Example controller: handles player endpoints
const playerService = require('../services/playerService');

exports.getWelcome = (req, res) => {
  res.send(playerService.getWelcomeMessage());
};
