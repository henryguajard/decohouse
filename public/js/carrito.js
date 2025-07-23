// === Obtener elementos del DOM ===
const iconoCarro = document.querySelector("#iconoCarro");
const containerCarrito = document.querySelector("#containerCarrito");
const IconoConteoC = document.querySelector("#icContarcarrito");

// === Recuperar carrito del localStorage o iniciar vacío ===
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// === Mostrar el número total de productos en el icono ===
const numeroCarrito = () => {
  const totalCantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  if (totalCantidad > 0) {
    IconoConteoC.style.display = "block";
    IconoConteoC.innerText = totalCantidad;
  } else {
    IconoConteoC.style.display = "none";
  }
  localStorage.setItem("carritoLength", totalCantidad);
};

// === Guardar en localStorage ===
const guardarStorage = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

// ✅ Opcional: función para cargar desde localStorage (si quieres usarla luego)
const cargarCarrito = () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];
};

// === Eliminar un producto del carrito por su ID ===
const eliminarProductoCarrito = (id) => {
  carrito = carrito.filter(item => item.id !== id);
  guardarStorage();
  numeroCarrito();
  verCarrito();
};

// === Mostrar productos en el carrito ===
const verCarrito = () => {
  containerCarrito.innerHTML = "";
  containerCarrito.style.display = "flex";

  // Header del carrito
  const headCarrito = document.createElement("div");
  headCarrito.className = "headCarrito";
  headCarrito.innerHTML = `<h1 class="titleCarrito">Tu compra DH</h1>`;
  containerCarrito.append(headCarrito);

  // Botón cerrar carrito
  const cerrarCarrito = document.createElement("i");
  cerrarCarrito.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
    <path d="M2.146 2.146a.5.5 0 0 1 .708 0L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854a.5.5 0 0 1 0-.708z"/>
  </svg>`;
  cerrarCarrito.className = "cerrarCarrito";
  cerrarCarrito.addEventListener("click", () => {
    containerCarrito.style.display = "none";
  });
  headCarrito.append(cerrarCarrito);

  // Mostrar cada producto
  carrito.forEach((producto) => {
    const { id, img, nombre, precio, cantidad } = producto;

    const bodyCarrito = document.createElement("div");
    bodyCarrito.className = "bodyCarrito";
    bodyCarrito.innerHTML = `
      <img src="${img}" alt="${nombre}">
      <h5>${nombre}</h5>
      <p>$${precio}</p>
      <p class="eliminarCarrito">Cant. ${cantidad}</p>
      <h6>Total: $${precio * cantidad}</h6>
    `;

    // Botón eliminar producto
    const eliminarCarritoBtn = document.createElement("i");
    eliminarCarritoBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="red" class="bi bi-trash" viewBox="0 0 16 16">
      <path d="M5.5 5.5a.5.5 0 0 1 .5-.5h.5v6h-.5a.5.5 0 0 1-.5-.5V5.5zm2.5 0a.5.5 0 0 1 .5-.5h.5v6h-.5a.5.5 0 0 1-.5-.5V5.5z"/>
      <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1-1V1h-11v1a1 1 0 0 1-1 1H1v1h1v9a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4h1V3h-1zM3.118 4 3 4.059V13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.059L12.882 4H3.118zM5 1h6v1H5V1z"/>
    </svg>`;
    eliminarCarritoBtn.className = "btnEliminarProducto";
    eliminarCarritoBtn.addEventListener("click", () => eliminarProductoCarrito(id));
    bodyCarrito.append(eliminarCarritoBtn);

    containerCarrito.append(bodyCarrito);
  });

  // Total a pagar (footer)
  const totalCarrito = carrito.reduce((acc, e) => acc + e.precio * e.cantidad, 0);
  const contenerTotalCarrito = document.createElement("footer");
  contenerTotalCarrito.className = "contenerTotalCarrito";
  contenerTotalCarrito.innerHTML = `<h4>Total a pagar: $${totalCarrito}</h4>`;
  containerCarrito.append(contenerTotalCarrito);
};

// === Evento para abrir el carrito ===
iconoCarro.addEventListener("click", verCarrito);

// === Cargar número del carrito al inicio ===
document.addEventListener("DOMContentLoaded", () => {
  numeroCarrito();
});

function agregarAlCarrito(producto) {
  const existe = carrito.find(p => p.id === producto.id);
  if (existe) {
    existe.cantidad += 1;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  guardarStorage();   // Actualiza localStorage
  numeroCarrito();    // Actualiza el contador del icono
}

const contenedorVistaCarrito = document.querySelector("#contenidoCarrito");

const renderVistaCarrito = () => {
  // ❌ Ya no llama a cargarCarrito porque no es necesaria

  if (!contenedorVistaCarrito) return;

  if (carrito.length === 0) {
    contenedorVistaCarrito.innerHTML = `<p>El carrito está vacío.</p>`;
    return;
  }

  let html = '<ul class="list-group mb-3">';
  carrito.forEach(p => {
    html += `
      <li class="list-group-item d-flex align-items-center">
        <img src="${p.img}" alt="${p.nombre}" width="80" class="me-3 rounded shadow-sm">
        <div>
          <strong>${p.nombre}</strong><br>
          <span class="text-success">$${p.precio}</span><br>
          <span>Cantidad: ${p.cantidad}</span>
        </div>
      </li>
    `;
  });
  html += '</ul>';

  html += `
    <button class="btn btn-danger mb-3" id="vaciarCarritoBtn">Vaciar carrito</button>
    <button class="btn btn-primary">Pagar</button>
  `;

  contenedorVistaCarrito.innerHTML = html;

  // Botón para vaciar el carrito
  const vaciarBtn = document.querySelector("#vaciarCarritoBtn");
  vaciarBtn.addEventListener("click", () => {
    carrito = [];
    guardarStorage();
    numeroCarrito();
    renderVistaCarrito();
  });
};

// Ejecutar si está en la vista de carrito
document.addEventListener("DOMContentLoaded", () => {
  renderVistaCarrito(); // si estamos en esa vista
});
