//constructor de objetos
class  productoDeccoHouse{
    constructor(id,nombre,precio,cantidad){
        this.id =id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad; 
    }
    
}
//array de objetos 
const productosDeccoHouse =[
{id : 01, nombre: `Juego living de terraza Sofia`,img : "../imagenes/terraza01.jpg", precio: 499990, cantidad: 10},
{id : 02, nombre: `Juego living de terraza Home Alaya`,img : "../imagenes/terraza02.JPG" , precio: 599990, cantidad: 10},
{id : 03, nombre: `Juego living de terraza Arrayan Premium`,img : "../imagenes/terraza03.JPG" , precio: 699990, cantidad: 10},
{id : 04, nombre: `Mesa bar TuHome`,img : "../imagenes/mesa01.jpeg" , precio: 1199990, cantidad: 10},
{id : 05, nombre: `Mesa Amazonas negro`,img : "../imagenes/mesa02.jpg", precio: 1299990, cantidad: 10},
{id : 06, nombre: `Mesa blue dark`,img : "../imagenes/mesa03.webp", precio: 1399990, cantidad: 10},
{id : 07, nombre: `Sofa slow`,img : "../imagenes/sofa01.JPG", precio: 499990, cantidad: 10},
{id : 08, nombre: `Sofa Kunza`,img : "../imagenes/sofa02.webp", precio: 399990, cantidad: 10},
{id : 09, nombre: `Sofa Essential`,img : "../imagenes/sofa03.JPG", precio: 299990, cantidad: 10}
];

let carrito = []

 const guardarStorage = () =>{
localStorage.setItem("carrito",JSON.stringify(carrito));

} 

function mensajeAgregado(){
    Swal.fire(
        'Agregado al carrito :D',
        
      );

}


// evento con CLICK aparece parrafo icono hechoEnCHile
const hechoEnCHile = document.getElementById("hechoEnCHile");
hechoEnCHile.addEventListener("click", aparecePH);
function aparecePH (){
const quitar = document.getElementById("container_HechoCHile");
quitar.classList.remove("pHechoCHile")
quitar.classList.add("pHechoCHile1")
aparecePH();

}

const container_HechoCHile =document.getElementById("container_HechoCHile")
container_HechoCHile.innerHTML = "<p><b>¡Hecho en  CHile!</b> </p>"
container_HechoCHile.className="pHechoCHile"


// evento con CLICK aparece parrafo icono Fabricado a mano
const fabricadoAMano = document.getElementById("fabricadoAMano");
fabricadoAMano.addEventListener("click", aparecePF);//Fabricado a mano
function aparecePF(){
const quitar = document.getElementById("container_fabricado");
quitar.classList.remove("pHechoCHile");
quitar.classList.add("pHechoCHile1");
aparecePF();
}
const container_fabricado = document.getElementById("container_fabricado")
container_fabricado.innerHTML = "<p><b>¡Fabricado a mano!</b> </p>"
container_fabricado.className = "pHechoCHile"



// evento con CLICK aparece parrafo icono 12 Meses de garantia
const doceMeses = document.getElementById("12Meses");
doceMeses.addEventListener("click", apareceP12);
function apareceP12 (){
const quitar = document.getElementById("container_12Meses");
quitar.classList.remove("pHechoCHile");
quitar.classList.add("pHechoCHile1");
apareceP12();
}



const container_12Meses = document.getElementById("container_12Meses") 
container_12Meses.innerHTML = "<p><b>¡garantia 12M!</b> </p>"
container_12Meses.className = "pHechoCHile"



// evento con CLICK aparece parrafo icono Despacho48H
const Despacho48H = document.getElementById("Despacho48H");
Despacho48H.addEventListener("click", apareceD48);
function apareceD48(){
const quitar = document.getElementById("container_Despacho48");
quitar.classList.remove("pHechoCHile");
quitar.classList.add("pHechoCHile1");
apareceD48();
}
const container_Despacho48 = document.getElementById("container_Despacho48");
container_Despacho48.innerHTML = "<p><b>¡Desp 48H habiles!</b> </p>"
container_Despacho48.className = "pHechoCHile"
//Despacho48H.addEventListener("click");Despacho en 48 horas habiles


//mostrar stock de productos DeccoHouse
let CardsDeccoHouse = document.querySelector(`#CardsDeccoHouse`);
productosDeccoHouse.forEach(item =>{
let div = document.createElement("div");
div.innerHTML =`
<div class="card  divnor " style="width: 18rem; height: 440px">
  <img src="${item.img}" class="card-img-top" style="width: 17rem; height: 120px" alt="${item.id}">
  <div class="card-body">
    <h5 class="card-title">${item.nombre}</h5>
  </div>
  <ul class="list-group  ">
    <li class="list-group-item divnor "> Precio ${item.precio}</li>
    <li class="list-group-item divnor ">Stock ${item.cantidad}</li>
   
  </ul>
  <div class="card-body">

  
  </div>

` 
CardsDeccoHouse.append(div);
let comprar =document.createElement("button");
comprar.innerText = "agregar al carrito"
comprar.className = "divnor"
div.append(comprar);
comprar.addEventListener("click",()=>{
carrito.push(item);
console.log(carrito);
guardarStorage();
mensajeAgregado()
})






})




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
<div class="card  divnor " style="width: 18rem; height: 400px">
  <img src="${item.img}" class="card-img-top" style="width: 17rem; height: 120px" alt="${item.id}">
  <div class="card-body">
    <h5 class="card-title">${item.nombre}</h5>
  </div>
  <ul class="list-group  ">
    <li class="list-group-item divnor "> Precio ${item.precio}</li>
    <li class="list-group-item divnor ">Stock ${item.cantidad}</li>
   
  </ul>
  <div class="card-body">

  
  </div>

`
CardsDeccoHouse.append(div) 
let comprar =document.createElement("button");
comprar.innerText = "agregar al carrito"
comprar.className = "divnor"
div.append(comprar);
comprar.addEventListener("click",()=>{
    carrito.push(item);
    console.log(carrito);
    guardarStorage();
    mensajeAgregado();



});

});
}


// mostrar en el DOOM nuevo array de productos filtrados mesas
const botonM = document.querySelector("#Mesas");
botonM.addEventListener ("click", Mesas);
function Mesas (){
document.querySelector("#CardsDeccoHouse").innerText = ``
let contenedor = document.querySelector("#CardsDeccoHouse");
filtrarMesas.forEach (item =>{
let div = document.createElement("div");
div.innerHTML =`
<div class="card  divnor " style="width: 18rem; height: 400px">
  <img src="${item.img}" class="card-img-top" style="width: 17rem; height: 120px" alt="${item.id}">
  <div class="card-body">
    <h5 class="card-title">${item.nombre}</h5>
  </div>
  <ul class="list-group  ">
    <li class="list-group-item divnor "> Precio ${item.precio}</li>
    <li class="list-group-item divnor ">Stock ${item.cantidad}</li>
   
  </ul>
  <div class="card-body">

  
  </div>

`
CardsDeccoHouse.append(div) 
let comprar =document.createElement("button");
comprar.innerText = "agregar al carrito"
comprar.className = "divnor"
div.append(comprar);
comprar.addEventListener("click",()=>{
    carrito.push(item);
    console.log(carrito);
    guardarStorage();
    mensajeAgregado();



});


})

}


// mostrar en el DOOM nuevo array de productos filtrados sofas
const botonS = document.querySelector("#Sofas");
botonS.addEventListener ("click", Sofas);
function Sofas (){
document.querySelector("#CardsDeccoHouse").innerText = ``
let contenedor = document.querySelector("#CardsDeccoHouse");
filtrarSofas.forEach(item =>{
let div = document.createElement("div");
div.innerHTML =`
<div class="card  divnor " style="width: 18rem; height: 400px">
  <img src="${item.img}" class="card-img-top" style="width: 17rem; height: 120px" alt="${item.id}">
  <div class="card-body">
    <h5 class="card-title">${item.nombre}</h5>
  </div>
  <ul class="list-group  ">
    <li class="list-group-item divnor "> Precio ${item.precio}</li>
    <li class="list-group-item divnor ">Stock ${item.cantidad}</li>
   
  </ul>
  <div class="card-body">

  
  </div>

`
CardsDeccoHouse.append(div) 
let comprar =document.createElement("button");
comprar.innerText = "agregar al carrito"
comprar.className = "divnor"
div.append(comprar);
comprar.addEventListener("click",()=>{
    carrito.push(item);
    console.log(carrito);
    guardarStorage();
    mensajeAgregado();



});



})



}




//creando nuevos arrays para las categorias con .filter
const filtrarJuegoTerraza = productosDeccoHouse.filter( item => item.id <=3);
const filtrarMesas = productosDeccoHouse.filter( (item) => item.precio >=1000000  );
const filtrarSofas = productosDeccoHouse.filter( item => item.id >=7);




//agregar evento al icono de DeccoHouse
const icono = document.getElementById("icono");
const imgIcon =document.getElementsByClassName("imgIcon");
icono.addEventListener("mousemove",() => {
imgIcon.className ="imgIcon"
});


// agregar array para mostrar las tarjetas y poner los filtros 
// filter 

