const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
require('dotenv').config(); // 

const productosRoutes = require('./routes/productos');
const carritoRoutes = require('./routes/carrito');
const Producto = require('./models/producto');

const app = express();

// Configurar sesiones
app.use(session({
  secret: 'mi-secreto-decohouse',
  resave: false,
  saveUninitialized: true
}));

// Middleware para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para leer datos de formularios
app.use(express.urlencoded({ extended: true }));

// Configurar EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



// Ruta principal
app.get('/', async (req, res) => {
  try {
    const productos = await Producto.find().limit(2);
    res.render('index', {
      titulo: 'Mi Tienda de Muebles',
      productos: productos || []
    });
  } catch (error) {
    console.error('Error al cargar productos:', error);
    res.render('index', {
      titulo: 'Mi Tienda de Muebles',
      productos: []
    });
  }
});

// Rutas adicionales
app.use('/productos', productosRoutes);
app.use('/carrito', carritoRoutes);

// Conectar a MongoDB Atlas y arrancar el servidor
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ Conectado a MongoDB Atlas');

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('❌ Error al conectar a MongoDB Atlas:', err);
});
