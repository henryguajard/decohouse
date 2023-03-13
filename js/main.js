//creando nuevos arrays para las categorias con .filter
const filtrarJuegoTerraza = productosDeccoHouse.filter( item => item.id <=3);
const filtrarMesas = productosDeccoHouse.filter( (item) => item.precio >=1000000  );
const filtrarSofas = productosDeccoHouse.filter( item => item.id >=7);

let carrito = JSON.parse(localStorage.getItem("carrito")) || [] ;

//set Item
const guardarStorage = () =>{
localStorage.setItem("carrito",JSON.stringify(carrito));

} 
//Get item
//JSON.parse(localStorage.getItem("carrito"));


function mensajeAgregado(){
    Swal.fire(
        'Agregado al carrito :D',
        
      );
}


//agregar evento al icono de DeccoHouse
const icono = document.getElementById("icono");
const imgIcon =document.getElementsByClassName("imgIcon");
icono.addEventListener("mousemove",() => {
imgIcon.className ="imgIcon"
});


// evento con CLICK aparece parrafo icono hechoEnCHile
const hechoEnCHile = document.getElementById("hechoEnCHile");
hechoEnCHile.addEventListener("mousemove", aparecePH);
function aparecePH (){
const quitar = document.getElementById("container_HechoCHile");
quitar.classList.remove("pHechoCHile")
quitar.classList.add("pHechoCHile1")
aparecePH();

}

// evento con CLICK desaparece parrafo icono hechoEnCHile
hechoEnCHile.addEventListener("mouseout",desaparece);
function desaparece (){
const quitar = document.getElementById("container_HechoCHile");
quitar.classList.add("pHechoCHile");
quitar.classList.remove("pHechoCHile1");
desaparece ();
}


const container_HechoCHile =document.getElementById("container_HechoCHile")
container_HechoCHile.innerHTML = "<p><b>¡Hecho en  CHile!</b> </p>"
container_HechoCHile.className="pHechoCHile"


// evento con CLICK aparece parrafo icono Fabricado a mano
const fabricadoAMano = document.getElementById("fabricadoAMano");
fabricadoAMano.addEventListener("mousemove", aparecePF);//Fabricado a mano
function aparecePF(){
const quitar = document.getElementById("container_fabricado");
quitar.classList.remove("pHechoCHile");
quitar.classList.add("pHechoCHile1");
aparecePF();
}
// evento con CLICK desaparece parrafo icono fabricadoAMano
fabricadoAMano.addEventListener("mouseout",desaparecef);
function desaparecef (){
const quitar = document.getElementById("container_fabricado");
quitar.classList.add("pHechoCHile");
quitar.classList.remove("pHechoCHile1");
desaparecef ();
  }


const container_fabricado = document.getElementById("container_fabricado")
container_fabricado.innerHTML = "<p><b>¡Fabricado a mano!</b> </p>"
container_fabricado.className = "pHechoCHile"



// evento con CLICK aparece parrafo icono 12 Meses de garantia
const doceMeses = document.getElementById("12Meses");
doceMeses.addEventListener("mousemove", apareceP12);
function apareceP12 (){
const quitar = document.getElementById("container_12Meses");
quitar.classList.remove("pHechoCHile");
quitar.classList.add("pHechoCHile1");
apareceP12();
}

// evento con CLICK desaparece parrafo icono 12 Meses de garantia
doceMeses.addEventListener("mouseout",desaparece12);
function desaparece12 (){
const quitar = document.getElementById("container_12Meses");
quitar.classList.add("pHechoCHile");
quitar.classList.remove("pHechoCHile1");
desaparece12 ();
  }



const container_12Meses = document.getElementById("container_12Meses") 
container_12Meses.innerHTML = "<p><b>¡garantia 12M!</b> </p>"
container_12Meses.className = "pHechoCHile"



// evento con mousemove aparece parrafo icono Despacho48H
const Despacho48H = document.getElementById("Despacho48H");
Despacho48H.addEventListener("mousemove", apareceD48);
function apareceD48(){
const quitar = document.getElementById("container_Despacho48");
quitar.classList.remove("pHechoCHile");
quitar.classList.add("pHechoCHile1");
apareceD48();
}
// evento con CLICK desaparece parrafo icono Despacho48H
Despacho48H.addEventListener("mouseout",desapareceD48);
function desapareceD48 (){
const quitar = document.getElementById("container_Despacho48");
quitar.classList.add("pHechoCHile");
quitar.classList.remove("pHechoCHile1");
desapareceD48 ();
  }


const container_Despacho48 = document.getElementById("container_Despacho48");
container_Despacho48.innerHTML = "<p><b>¡Desp 48H habiles!</b> </p>"
container_Despacho48.className = "pHechoCHile"
//Despacho48H.addEventListener("click");Despacho en 48 horas habiles

//////////////////////////////////////////////////////////////////////////////////////
//mostrar stock de productos DeccoHouse
let CardsDeccoHouse = document.querySelector(`#CardsDeccoHouse`);
productosDeccoHouse.forEach(item =>{
let div = document.createElement("div");
div.innerHTML =`
<div class="card  divnor " style="width: 18rem; height: 350px">
  <img src="${item.img}" class="card-img-top" style="width: 17rem; height: 120px" alt="${item.id}">
  <div class="card-body">
    <h5 class="card-title">${item.nombre}</h5>
  </div>
  <ul class="list-group  ">
    <li class="list-group-item divnor "> Precio ${item.precio}</li>
    <li class="list-group-item divnor ">Cant ${item.cantidad}</li>
   
  </ul>
  <div class="card-body">

  
  </div>

` 
CardsDeccoHouse.append(div);
let comprar =document.createElement("button");
comprar.innerText = "agregar al carrito"
comprar.className = "botoncard"
div.append(comprar);
comprar.addEventListener("click",()=>{
carrito.push(item);
console.log(carrito);
guardarStorage();
mensajeAgregado()
})


})



//////////////////////////////////////////////////////////////////////////////////
// mostrar en el DOOM nuevo array de productos filtrados Juego de terraza
//const terraza = document.querySelector("#terraza");

const botonJ = document.querySelector("#JuegosT");
botonJ.addEventListener("click", juegosT);
function juegosT (){
document.querySelector("#CardsDeccoHouse").innerText = ``
let contenedor = document.querySelector("#CardsDeccoHouse");
filtrarJuegoTerraza.forEach(item =>{

let div = document.createElement("div");
div.innerHTML =`
<div class="card  divnor " style="width: 18rem; height: 350px">
  <img src="${item.img}" class="card-img-top" style="width: 17rem; height: 120px" alt="${item.id}">
  <div class="card-body">
    <h5 class="card-title">${item.nombre}</h5>
  </div>
  <ul class="list-group  ">
    <li class="list-group-item divnor "> Precio ${item.precio}</li>
    <li class="list-group-item divnor ">Cant ${item.cantidad}</li>
   
  </ul>
  <div class="card-body">

  
  </div>

`
CardsDeccoHouse.append(div) 
let comprar =document.createElement("button");
comprar.innerText = "agregar al carrito"
comprar.className = "botoncard"
div.append(comprar);
comprar.addEventListener("click",()=>{
    carrito.push(item);
    console.log(carrito);
    guardarStorage();
    mensajeAgregado();
});

});
}

///////////////////////////////////////////////////////////////////////
// mostrar en el DOOM nuevo array de productos filtrados mesas
const botonM = document.querySelector("#Mesas");
botonM.addEventListener ("click", Mesas);
function Mesas (){
document.querySelector("#CardsDeccoHouse").innerText = ``
let contenedor = document.querySelector("#CardsDeccoHouse");
filtrarMesas.forEach (item =>{
let div = document.createElement("div");
div.innerHTML =`
<div class="card  divnor " style="width: 18rem; height: 350px">
  <img src="${item.img}" class="card-img-top" style="width: 17rem; height: 120px" alt="${item.id}">
  <div class="card-body">
    <h5 class="card-title">${item.nombre}</h5>
  </div>
  <ul class="list-group  ">
    <li class="list-group-item divnor "> Precio ${item.precio}</li>
    <li class="list-group-item divnor ">Cant ${item.cantidad}</li>
   
  </ul>
  <div class="card-body">

  
  </div>

`
CardsDeccoHouse.append(div) 
let comprar =document.createElement("button");
comprar.innerText = "agregar al carrito"
comprar.className = "botoncard"
div.append(comprar);
comprar.addEventListener("click",()=>{
    carrito.push(item);
    console.log(carrito);
    guardarStorage();
    mensajeAgregado();



});


})

}

//////////////////////////////////////////////////////////////////////
// mostrar en el DOOM nuevo array de productos filtrados sofas
const botonS = document.querySelector("#Sofas");
botonS.addEventListener ("click", Sofas);
function Sofas (){
document.querySelector("#CardsDeccoHouse").innerText = ``
let contenedor = document.querySelector("#CardsDeccoHouse");
filtrarSofas.forEach(item =>{
let div = document.createElement("div");
div.innerHTML =`
<div class="card  divnor " style="width: 18rem; height: 350px">
  <img src="${item.img}" class="card-img-top" style="width: 17rem; height: 120px" alt="${item.id}">
  <div class="card-body">
    <h5 class="card-title">${item.nombre}</h5>
  </div>
  <ul class="list-group  ">
    <li class="list-group-item divnor "> Precio ${item.precio}</li>
    <li class="list-group-item divnor ">Cant ${item.cantidad}</li>
   
  </ul>
  <div class="card-body">

  
  </div>

`
CardsDeccoHouse.append(div) 
let comprar =document.createElement("button");
comprar.innerText = "agregar al carrito"
comprar.className = "botoncard"
div.append(comprar);
comprar.addEventListener("click",()=>{
//const sumarCantidad = carrito.some((sumarp) => sumarp.id === item.id);
//console.log(sumarCantidad);
/* if(sumarCantidad === true){
carrito.map(item =>{
if(item.id === sumarp.id){
item.cantidad ++

} 
});

} */

    carrito.push({
      id : item.id,
      nombre : item.nombre,
      img : item.img,
      precio : item.precio,
      cantidad : item.cantidad
    });
  
    console.log(carrito);
    numeroCarrito ();
    guardarStorage();
    mensajeAgregado();

});


})


}


/////////////////////////////////////////////////////////////////////////////////
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

//recorrer carrito foreach para ver los productos seleccionados
carrito.forEach( item =>{
  
const bodyCarrito = document.createElement("div");
bodyCarrito.className ="bodyCarrito"
bodyCarrito.innerHTML =`
<img src="${item.img}">
<h4>${item.nombre}</h4>
<p>$ ${item.precio}</p>
<p> Cant ${item.cantidad}</p>

`
console.log(carrito.length);
//numeroCarrito();
numeroCarrito();

//containerCarrito.append(bodyCarrito)//aqui

let eliminarCarrito = document.createElement("i")
eliminarCarrito.innerHTML =`
<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-cart-x" viewBox="0 0 16 16">
  <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>
`
eliminarCarrito.className ="eliminarCarrito"
bodyCarrito.append(eliminarCarrito);
//no funciona boton eliminar producto arreglar
eliminarCarrito.addEventListener("click",eliminarProductoCarrito);


containerCarrito.append(bodyCarrito);
// con reduce sumamos el precio de los productos seleccionados
const totalCarrito = carrito.reduce((acumula,e) => acumula + e.precio, 0);
const contenerTotalCarrito = document.createElement("footer");
contenerTotalCarrito.className ="contenerTotalCarrito";
contenerTotalCarrito.innerHTML =`
 total a pagar $ ${totalCarrito}


`
containerCarrito.append(contenerTotalCarrito);//


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
 // const crearIconoConteoC =document.createElement("span")

// agregar array para mostrar las tarjetas y poner los filtros 
// filter 

