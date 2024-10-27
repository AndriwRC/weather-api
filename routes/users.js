const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserService = require('../services/users');

const router = express.Router();
const userService = new UserService();

const JWT_SECRET = 'plad29';

router.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await userService.getUserByUsername(username);
    console.log(existingUser);
    if (existingUser) {
      return res.status(400).json({ error: 'Usuario ya existe' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear usuario
    const result = await userService.createUser(username, hashedPassword);

    // Generar token JWT
    const token = jwt.sign({ userId: result.insertedId, username }, JWT_SECRET);

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar el usuario' });
  }
});

// Ruta para iniciar sesión
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await userService.getUserByUsername(username);

    if (!user) {
      return res
        .status(400)
        .json({ error: 'Usuario o contraseña incorrectos' });
    }

    const validPassword = await bcrypt.compare(password, user?.password);

    if (!validPassword) {
      return res
        .status(400)
        .json({ error: 'Usuario o contraseña incorrectos' });
    }

    // Generar token JWT
    const token = jwt.sign({ userId: user._id, username }, JWT_SECRET);

    res.status(200).json({ username, token });
  } catch (error) {
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
});

module.exports = router;
