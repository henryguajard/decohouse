const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session'); // 👈 Importar express-session

const productosRoutes = require('./routes/productos'); 
const carritoRoutes = require('./routes/carrito'); // 👈 Importar rutas del carrito
const Producto = require('./models/producto'); 

const app = express();

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/mi-tienda', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error al conectar MongoDB:', err));

// Configurar sesiones
app.use(session({
  secret: 'mi-secreto-decohouse', // 🔐 Puedes cambiar este secreto
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

// Ruta principal (destacados)
app.get('/', async (req, res) => {
  try {
    const productos = await Producto.find().limit(2);
    res.render('index', { titulo: 'Mi Tienda de Muebles', productos });
  } catch (error) {
    console.error('Error al cargar productos:', error);
    res.status(500).send('Error al mostrar productos');
  }
});

// Rutas
app.use('/productos', productosRoutes);    // ✅ Rutas de productos
app.use('/carrito', carritoRoutes);        // ✅ Rutas del carrito

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
