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
  async getInventory(username) {
    await db.read();
    const player = db.data.players.find(p => p.username === username);
    return player ? player.inventory || [] : null;
  },
  async addItemToInventory(username, item) {
    await db.read();
    const player = db.data.players.find(p => p.username === username);
    if (!player) return null;
    player.inventory = player.inventory || [];
    player.inventory.push(item);
    await db.write();
    return player.inventory;
  },
  async removeItemFromInventory(username, itemId) {
    await db.read();
    const player = db.data.players.find(p => p.username === username);
    if (!player || !player.inventory) return null;
    player.inventory = player.inventory.filter(i => i.id !== itemId);
    await db.write();
    return player.inventory;
  },
  // Player stats and leveling
  async getStats(username) {
    await db.read();
    const player = db.data.players.find(p => p.username === username);
    return player ? player.stats || {} : null;
  },
  async updateStats(username, stats) {
    await db.read();
    const player = db.data.players.find(p => p.username === username);
    if (!player) return null;
    player.stats = { ...player.stats, ...stats };
    await db.write();
    return player.stats;
  },
  // Save/load game state
  async saveGameState(username, state) {
    await db.read();
    const player = db.data.players.find(p => p.username === username);
    if (!player) return null;
    player.gameState = state;
    await db.write();
    return player.gameState;
  },
  async loadGameState(username) {
    await db.read();
    const player = db.data.players.find(p => p.username === username);
    return player ? player.gameState || {} : null;
  },
};
