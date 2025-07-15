const { db } = require('./db');

module.exports = {
  async getAllDungeons() {
    await db.read();
    return db.data.dungeons;
  },
  async addDungeon(dungeon) {
    await db.read();
    db.data.dungeons.push(dungeon);
    await db.write();
    return dungeon;
  },
  async getDungeonById(id) {
    await db.read();
    return db.data.dungeons.find(d => d.id === id);
  },
  async updateDungeon(id, updates) {
    await db.read();
    const dungeon = db.data.dungeons.find(d => d.id === id);
    if (dungeon) {
      Object.assign(dungeon, updates);
      await db.write();
    }
    return dungeon;
  },
};
