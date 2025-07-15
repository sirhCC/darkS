const { db } = require('./db');

module.exports = {
  async getAllItems() {
    await db.read();
    return db.data.items;
  },
  async addItem(item) {
    await db.read();
    db.data.items.push(item);
    await db.write();
    return item;
  },
  async getItemById(id) {
    await db.read();
    return db.data.items.find(i => i.id === id);
  },
  async updateItem(id, updates) {
    await db.read();
    const item = db.data.items.find(i => i.id === id);
    if (item) {
      Object.assign(item, updates);
      await db.write();
    }
    return item;
  },
};
