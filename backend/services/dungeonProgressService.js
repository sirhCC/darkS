const { db } = require('./db');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  // Move player in dungeon
  async movePlayer(username, direction) {
    await db.read();
    const player = db.data.players.find(p => p.username === username);
    if (!player) return null;
    player.dungeonState = player.dungeonState || { position: { x: 0, y: 0 }, visited: [] };
    // Example: simple grid movement
    const pos = player.dungeonState.position;
    if (direction === 'up') pos.y -= 1;
    if (direction === 'down') pos.y += 1;
    if (direction === 'left') pos.x -= 1;
    if (direction === 'right') pos.x += 1;
    player.dungeonState.visited.push({ ...pos });
    await db.write();
    return player.dungeonState;
  },
  // Reveal room
  async revealRoom(username, roomInfo) {
    await db.read();
    const player = db.data.players.find(p => p.username === username);
    if (!player) return null;
    player.dungeonState = player.dungeonState || { position: { x: 0, y: 0 }, visited: [] };
    player.dungeonState.revealed = player.dungeonState.revealed || [];
    player.dungeonState.revealed.push(roomInfo);
    await db.write();
    return player.dungeonState;
  },
  // Get dungeon state
  async getDungeonState(username) {
    await db.read();
    const player = db.data.players.find(p => p.username === username);
    return player ? player.dungeonState || {} : null;
  },
};
