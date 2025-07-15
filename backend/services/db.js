// Local database setup using lowdb
const { Low, JSONFile } = require('lowdb');
const path = require('path');

const dbFile = path.join(__dirname, '../data/db.json');
const adapter = new JSONFile(dbFile);
const db = new Low(adapter);

async function initDB() {
  await db.read();
  db.data ||= { players: [], dungeons: [], items: [] };
  await db.write();
}

module.exports = { db, initDB };
