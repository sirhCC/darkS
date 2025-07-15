const express = require('express');
const cors = require('cors');
const playerRoutes = require('./routes/playerRoutes');
const authRoutes = require('./routes/authRoutes');
const dungeonRoutes = require('./routes/dungeonRoutes');
const itemRoutes = require('./routes/itemRoutes');
const { initDB } = require('./services/db');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

initDB().then(() => {
  app.use('/api/player', playerRoutes);
  app.use('/api/auth', authRoutes);
  app.use('/api/dungeon', dungeonRoutes);
  app.use('/api/item', itemRoutes);

  app.get('/', (req, res) => {
    res.send('🗝️ Welcome to the Dungeon Crawler Backend!');
  });

  app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
  });
});
