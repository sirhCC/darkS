// User authentication controller
const authService = require('../services/authService');

exports.register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await authService.register(username, password);
    res.status(201).json(user);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await authService.login(username, password);
    res.json(result);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};
