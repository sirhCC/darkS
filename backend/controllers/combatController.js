const combatService = require('../services/combatService');

exports.startCombat = async (req, res, next) => {
  try {
    const combat = await combatService.startCombat(req.params.username, req.body.enemy);
    if (!combat) return res.status(404).json({ error: 'Player not found' });
    res.status(201).json(combat);
  } catch (e) {
    next(e);
  }
};

exports.playerAttack = async (req, res, next) => {
  try {
    const combat = await combatService.playerAttack(req.params.username, req.body.damage);
    if (!combat) return res.status(404).json({ error: 'Combat not found' });
    res.json(combat);
  } catch (e) {
    next(e);
  }
};

exports.enemyAttack = async (req, res, next) => {
  try {
    const combat = await combatService.enemyAttack(req.params.username, req.body.damage);
    if (!combat) return res.status(404).json({ error: 'Combat not found' });
    res.json(combat);
  } catch (e) {
    next(e);
  }
};

exports.endCombat = async (req, res, next) => {
  try {
    const result = await combatService.endCombat(req.params.username);
    if (!result) return res.status(404).json({ error: 'Combat not found' });
    res.json({ success: true });
  } catch (e) {
    next(e);
  }
};
