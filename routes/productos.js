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

// Ruta para mostrar un producto individual
router.get('/producto/:id', async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (!producto) {
      return res.status(404).send('Producto no encontrado');
    }
    res.render('producto-detalle', { producto });
  } catch (error) {
    console.error('Error al obtener producto:', error);
    res.status(500).send('Error al obtener el producto');
  }
});

module.exports = router;
