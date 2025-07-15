const { db } = require('./db');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  // Start a new combat encounter
  async startCombat(username, enemy) {
    await db.read();
    const player = db.data.players.find(p => p.username === username);
    if (!player) return null;
    const combat = {
      id: uuidv4(),
      player: username,
      enemy,
      turn: 'player',
      log: [],
      state: 'active',
    };
    player.combat = combat;
    await db.write();
    return combat;
  },
  // Player attacks enemy
  async playerAttack(username, damage) {
    await db.read();
    const player = db.data.players.find(p => p.username === username);
    if (!player || !player.combat) return null;
    player.combat.log.push({ actor: 'player', action: 'attack', damage });
    player.combat.enemy.hp -= damage;
    if (player.combat.enemy.hp <= 0) {
      player.combat.state = 'won';
    } else {
      player.combat.turn = 'enemy';
    }
    await db.write();
    return player.combat;
  },
  // Enemy attacks player
  async enemyAttack(username, damage) {
    await db.read();
    const player = db.data.players.find(p => p.username === username);
    if (!player || !player.combat) return null;
    player.combat.log.push({ actor: 'enemy', action: 'attack', damage });
    player.stats.hp -= damage;
    if (player.stats.hp <= 0) {
      player.combat.state = 'lost';
    } else {
      player.combat.turn = 'player';
    }
    await db.write();
    return player.combat;
  },
  // End combat
  async endCombat(username) {
    await db.read();
    const player = db.data.players.find(p => p.username === username);
    if (!player || !player.combat) return null;
    delete player.combat;
    await db.write();
    return true;
  },
};
