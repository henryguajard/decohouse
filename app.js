const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');

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

// 👉 Ruta temporal para crear un producto de prueba
app.get('/crear-producto-test', async (req, res) => {
  try {
    const nuevoProducto = new Producto({
      nombre: 'Silla Moderna',
      precio: 19990,
      descripcion: 'Silla cómoda con diseño moderno',
      imagen: 'silla.jpg'
    });

    await nuevoProducto.save();
    res.send('✅ Producto de prueba creado exitosamente');
  } catch (error) {
    console.error('❌ Error al crear producto:', error);
    res.status(500).send('Error al crear producto');
  }
});

// Rutas adicionales
app.use('/productos', productosRoutes);
app.use('/carrito', carritoRoutes);

// Conexión a MongoDB Atlas y arranque del servidor
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
