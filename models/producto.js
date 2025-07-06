const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  categoria: String,
  nombre: String,
  precio: Number,
  descripcion: String,
  imagen: String, // URL o nombre del archivo en /public/img/mesa01.jpg
  stock: Number
});

module.exports = mongoose.model('Producto', productoSchema);