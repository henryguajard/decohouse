const express = require('express');
const router = express.Router();
const Producto = require('../models/producto');

// Ver carrito
router.get('/', (req, res) => {
  const carrito = req.session.carrito || [];
  res.render('carrito', { carrito });
});
//agregar producto id-detalle
router.get('/producto/:id', async (req, res) => {
  const producto = await Producto.findById(req.params.id);
  if (!producto) return res.status(404).send('Producto no encontrado');

  // Buscar si el producto ya está en el carrito de sesión
  const carrito = req.session.carrito || [];
  const carritoItem = carrito.find(item => item._id == producto._id);

  res.render('detalle-producto', {
    producto,
    carritoItem
  });
});

// Agregar al carrito
router.post('/agregar', async (req, res) => {
  const productoId = req.body.productoId;

  try {
    const producto = await Producto.findById(productoId);
    if (!producto) return res.status(404).send('Producto no encontrado');

    // Inicializar el carrito si no existe
    if (!req.session.carrito) req.session.carrito = [];

    // Verificar si el producto ya está en el carrito
    const index = req.session.carrito.findIndex(item => item._id == productoId);

    if (index >= 0) {
      // Si ya existe, incrementar la cantidad
      req.session.carrito[index].cantidad += 1;
    } else {
      // Si no existe, agregarlo con cantidad 1
      req.session.carrito.push({
        _id: producto._id,
        nombre: producto.nombre,
        precio: producto.precio,
        imagen: producto.imagen, // si usas imagen
        cantidad: 1
      });
    }

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

// Aumentar cantidad
router.post('/aumentar', (req, res) => {
  const productoId = req.body.productoId;
  const carrito = req.session.carrito || [];

  const index = carrito.findIndex(p => p._id == productoId);
  if (index >= 0) {
    carrito[index].cantidad += 1;
  }

  res.redirect('/carrito');
});

// Disminuir cantidad
router.post('/disminuir', (req, res) => {
  const productoId = req.body.productoId;
  const carrito = req.session.carrito || [];

  const index = carrito.findIndex(p => p._id == productoId);
  if (index >= 0 && carrito[index].cantidad > 1) {
    carrito[index].cantidad -= 1;
  } else if (index >= 0 && carrito[index].cantidad === 1) {
    carrito.splice(index, 1); // eliminar del carrito si queda en 0
  }

  res.redirect('/carrito');
});

module.exports = router;