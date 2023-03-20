//mostrar productos en carrito de compras
const iconoCarro =document.querySelector("#iconoCarro");
const containerCarrito = document.querySelector("#containerCarrito");
const IconoConteoC =document.querySelector("#icContarcarrito")



 const verCarrito = () =>{
containerCarrito.innerHTML = ""
containerCarrito.style.display = "flex"//meter stilo css
const headCarrito = document.createElement ("div");
headCarrito.className ="headCarrito";
headCarrito.innerHTML =`
<h1 class=" titleCarrito">Tu compra DH</h1>

`
containerCarrito.append(headCarrito);

const cerrarCarrito = document.createElement("i");
cerrarCarrito.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" id="ocultar carrito" viewBox="0 0 16 16">
<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>`
cerrarCarrito.className = ("cerrarCarrito")

cerrarCarrito.addEventListener("click",() =>{
containerCarrito.style.display = "none"

})

headCarrito.append(cerrarCarrito);
//fin header carrito div + x cerrar carrito
// con reduce sumamos el precio de los productos seleccionados
const totalCarrito = carrito.reduce((acumula,e) => acumula + e.precio * e.cantidad, 0);

const contenerTotalCarrito = document.createElement("footer");
contenerTotalCarrito.className ="contenerTotalCarrito";
contenerTotalCarrito.innerHTML =`
 total a pagar $ ${totalCarrito}


`
console.log(totalCarrito);
containerCarrito.append(contenerTotalCarrito)


//recorrer carrito foreach para ver los productos seleccionados
//Desestructuración en parámetros
carrito.forEach( ({img , nombre , precio , cantidad }) =>{
  
const bodyCarrito = document.createElement("div");
bodyCarrito.className ="bodyCarrito"
bodyCarrito.innerHTML =`
<img src="${img}">
<h5 class="">${nombre}</h5>
<p class="">$${precio}</p>
<p class="eliminarCarrito">Cant.${cantidad}</p>
<h6 class="eliminarCarrito">Total: ${precio * cantidad}</h6>
`
console.log(carrito.length);

numeroCarrito();



let eliminarCarrito = document.createElement("i")
eliminarCarrito.innerHTML =`
<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-cart-x" viewBox="0 0 16 16">
  <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>
`
eliminarCarrito.className ="cerrarCarrito"
bodyCarrito.append(eliminarCarrito);

eliminarCarrito.addEventListener("click",eliminarProductoCarrito);


containerCarrito.append(bodyCarrito);


});
};


iconoCarro.addEventListener("click",verCarrito);
//eliminar producto de carrito con find y filter
const eliminarProductoCarrito = () =>{
const encontrarId = carrito.find(item => item.id);
 carrito = carrito.filter(item =>{
    return item !== encontrarId;
  });
  numeroCarrito ();
  guardarStorage();
  verCarrito();
  };

 const numeroCarrito = () => {
IconoConteoC.style.display= "block";

const carritoLength = carrito.length;
localStorage.setItem("carritoLength", JSON.stringify(carritoLength))


IconoConteoC.innerText = JSON.parse(localStorage.getItem("carritoLength"));

 }
 numeroCarrito();

