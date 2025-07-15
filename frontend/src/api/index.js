const API_URL = 'http://localhost:4000/api';

// Helper for GET requests
async function get(path) {
  const res = await fetch(`${API_URL}${path}`);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

// Helper for POST requests
async function post(path, data) {
  const res = await fetch(`${API_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

// Helper for PUT requests
async function put(path, data) {
  const res = await fetch(`${API_URL}${path}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

// Helper for DELETE requests
async function del(path) {
  const res = await fetch(`${API_URL}${path}`, { method: 'DELETE' });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

// Player API
export const PlayerAPI = {
  getAll: () => get('/player'),
  get: (username) => get(`/player/${username}`),
  create: (player) => post('/player', player),
  update: (username, updates) => put(`/player/${username}`, updates),
};

// Inventory API
export const InventoryAPI = {
  get: (username) => get(`/inventory/${username}`),
  add: (username, item) => post(`/inventory/${username}`, item),
  remove: (username, itemId) => del(`/inventory/${username}/${itemId}`),
};

// Item API
export const ItemAPI = {
  getAll: () => get('/item'),
  get: (id) => get(`/item/${id}`),
  create: (item) => post('/item', item),
  update: (id, updates) => put(`/item/${id}`, updates),
};

// Combat API
export const CombatAPI = {
  start: (username, enemy) => post(`/combat/${username}/start`, { enemy }),
  playerAttack: (username, damage) => post(`/combat/${username}/player-attack`, { damage }),
  enemyAttack: (username, damage) => post(`/combat/${username}/enemy-attack`, { damage }),
  end: (username) => post(`/combat/${username}/end`),
};

// Dungeon Progression API
export const DungeonAPI = {
  move: (username, direction) => post(`/dungeon-progress/${username}/move`, { direction }),
  reveal: (username, roomInfo) => post(`/dungeon-progress/${username}/reveal`, { roomInfo }),
  getState: (username) => get(`/dungeon-progress/${username}/state`),
};

// Player Stats/Leveling API
export const PlayerFeatureAPI = {
  getStats: (username) => get(`/player-feature/${username}/stats`),
  updateStats: (username, stats) => put(`/player-feature/${username}/stats`, stats),
  saveGame: (username, state) => post(`/player-feature/${username}/save`, state),
  loadGame: (username) => get(`/player-feature/${username}/load`),
};
