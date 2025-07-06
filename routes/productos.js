const express = require('express');

const router = express.Router();
const Producto = require('../models/producto');

// Mostrar todos los productos
router.get('/', async (req, res) => {
  try {
    const productos = await Producto.find();
    res.render('productos', { productos });
  } catch (error) {
    res.status(500).send('Error al obtener los productos');
  }
});

module.exports = router;
