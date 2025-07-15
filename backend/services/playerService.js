const { db } = require('./db');

// Example service: handles player logic
module.exports = {
  getWelcomeMessage() {
    return '🗝️ Welcome to the Dungeon Crawler Backend!';
  },
  async getAllPlayers() {
    await db.read();
    return db.data.players;
  },
  async addPlayer(player) {
    await db.read();
    db.data.players.push(player);
    await db.write();
    return player;
  },
  async getPlayerByUsername(username) {
    await db.read();
    return db.data.players.find(p => p.username === username);
  },
  async updatePlayer(username, updates) {
    await db.read();
    const player = db.data.players.find(p => p.username === username);
    if (player) {
      Object.assign(player, updates);
      await db.write();
    }
    return player;
  },
};
