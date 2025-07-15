const express = require('express');
const cors = require('cors');
const playerRoutes = require('./routes/playerRoutes');
const authRoutes = require('./routes/authRoutes');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/api/player', playerRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('🗝️ Welcome to the Dungeon Crawler Backend!');
});

// Future: Add API routes for game logic, multiplayer, etc.

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
