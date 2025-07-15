const express = require('express');
const cors = require('cors');
const playerRoutes = require('./routes/playerRoutes');
const authRoutes = require('./routes/authRoutes');
const dungeonRoutes = require('./routes/dungeonRoutes');
const itemRoutes = require('./routes/itemRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const playerFeatureRoutes = require('./routes/playerFeatureRoutes');
const combatRoutes = require('./routes/combatRoutes');
const dungeonProgressRoutes = require('./routes/dungeonProgressRoutes');
const { initDB } = require('./services/db');
const errorHandler = require('./middleware/errorHandler');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

initDB().then(() => {
  app.use('/api/player', playerRoutes);
  app.use('/api/auth', authRoutes);
  app.use('/api/dungeon', dungeonRoutes);
  app.use('/api/item', itemRoutes);
  app.use('/api/inventory', inventoryRoutes);
  app.use('/api/player-feature', playerFeatureRoutes);
  app.use('/api/combat', combatRoutes);
  app.use('/api/dungeon-progress', dungeonProgressRoutes);

  app.get('/', (req, res) => {
    res.send('🗝️ Welcome to the Dungeon Crawler Backend!');
  });

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
  });
});
