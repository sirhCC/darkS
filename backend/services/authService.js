// User authentication service
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const users = []; // In-memory user store (replace with DB later)
const JWT_SECRET = process.env.JWT_SECRET || 'supersecret';

module.exports = {
  async register(username, password) {
    const existing = users.find(u => u.username === username);
    if (existing) throw new Error('User already exists');
    const hash = await bcrypt.hash(password, 10);
    const user = { username, password: hash };
    users.push(user);
    return { username };
  },
  async login(username, password) {
    const user = users.find(u => u.username === username);
    if (!user) throw new Error('Invalid credentials');
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Error('Invalid credentials');
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '2h' });
    return { token };
  },
  verifyToken(token) {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch {
      return null;
    }
  },
};
