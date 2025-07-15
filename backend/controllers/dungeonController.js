const dungeonService = require('../services/dungeonService');

exports.getAllDungeons = async (req, res, next) => {
  try {
    const dungeons = await dungeonService.getAllDungeons();
    res.json(dungeons);
  } catch (e) {
    next(e);
  }
};

exports.addDungeon = async (req, res, next) => {
  try {
    const dungeon = await dungeonService.addDungeon(req.body);
    res.status(201).json(dungeon);
  } catch (e) {
    next(e);
  }
};

exports.getDungeonById = async (req, res, next) => {
  try {
    const dungeon = await dungeonService.getDungeonById(req.params.id);
    if (!dungeon) return res.status(404).json({ error: 'Dungeon not found' });
    res.json(dungeon);
  } catch (e) {
    next(e);
  }
};

exports.updateDungeon = async (req, res, next) => {
  try {
    const dungeon = await dungeonService.updateDungeon(req.params.id, req.body);
    if (!dungeon) return res.status(404).json({ error: 'Dungeon not found' });
    res.json(dungeon);
  } catch (e) {
    next(e);
  }
};
