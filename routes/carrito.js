const express = require('express');
const router = express.Router();
const Producto = require('../models/producto');

// Ver carrito
router.get('/', (req, res) => {
  const carrito = req.session.carrito || [];
  res.render('carrito', { carrito });
});

// Agregar al carrito
router.post('/agregar', async (req, res) => {
  const productoId = req.body.productoId;

  try {
    const producto = await Producto.findById(productoId);
    if (!producto) return res.status(404).send('Producto no encontrado');

    if (!req.session.carrito) req.session.carrito = [];

    req.session.carrito.push(producto);
    res.redirect('/carrito');
  } catch (error) {
    console.error('Error al agregar al carrito:', error);
    res.status(500).send('Error al agregar producto');
  }
});

// Vaciar carrito (opcional)
router.post('/vaciar', (req, res) => {
  req.session.carrito = [];
  res.redirect('/carrito');
});

module.exports = router;
