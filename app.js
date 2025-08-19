const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
require('dotenv').config();

const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

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

app.use((req, res, next) => {
  const carrito = req.session.carrito || [];
  const totalProductos = carrito.reduce((total, item) => total + item.cantidad, 0);
  res.locals.totalProductosCarrito = totalProductos;
  next();
});

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
    const productos = await Producto.find().limit(3);
    res.render('index', { titulo: 'Mi Tienda de Muebles', productos: productos || [] });
  } catch (error) {
    console.error('Error al cargar productos:', error);
    res.render('index', { titulo: 'Mi Tienda de Muebles', productos: [] });
  }
});

// Rutas adicionales
app.use('/productos', productosRoutes);
app.use('/carrito', carritoRoutes);

// Ruta de checkout con Stripe
app.post('/checkout', async (req, res) => {
  try {
    const carrito = req.session.carrito || [];
    if (carrito.length === 0) return res.redirect('/carrito');

    const line_items = carrito.map(item => ({
      price_data: {
        currency: "clp",
        product_data: { name: item.nombre },
        unit_amount: item.precio, 
      },
      quantity: item.cantidad,
    }));

    const DOMAIN = process.env.DOMAIN || 'http://localhost:3000';

    const sessionStripe = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: line_items,
      mode: "payment",
      success_url: `${DOMAIN}/success`,
      cancel_url: `${DOMAIN}/cancel`,
    });

    res.redirect(303, sessionStripe.url);

  } catch (err) {
    console.error("❌ Error Stripe:", err);
    res.status(500).send("Error al crear sesión de pago");
  }
});

// Rutas de éxito y cancelación
app.get('/success', (req, res) => {
  res.send("<h1>✅ Pago exitoso (Stripe sandbox)</h1>");
});

app.get('/cancel', (req, res) => {
  res.send("<h1>❌ Pago cancelado</h1>");
});

// Conectar a MongoDB Atlas y arrancar el servidor
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ Conectado a MongoDB Atlas');

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
  });
}).catch(err => {
  console.error('❌ Error al conectar a MongoDB Atlas:', err);
});
