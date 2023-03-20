//creando nuevos arrays para las categorias con .filter
const filtrarJuegoTerraza = productosDeccoHouse.filter( item => item.id <=3);
const filtrarMesas = productosDeccoHouse.filter( (item) => item.precio >=1000000  );
const filtrarSofas = productosDeccoHouse.filter( item => item.id >=7);
// Operador avanzado ||
let carrito = JSON.parse(localStorage.getItem("carrito")) || [] ;

//set Item
const guardarStorage = () =>{
localStorage.setItem("carrito",JSON.stringify(carrito));

} 

function mensajeAgregado(){
    Swal.fire(
        'Agregado al carrito :D',
        
      );}



    
      


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

}
desaparece ();

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

}
aparecePF();
// evento con CLICK desaparece parrafo icono fabricadoAMano
fabricadoAMano.addEventListener("mouseout",desaparecef);
function desaparecef (){
const quitar = document.getElementById("container_fabricado");
quitar.classList.add("pHechoCHile");
quitar.classList.remove("pHechoCHile1");

  }
  desaparecef ();

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

}
apareceP12();

// evento con CLICK desaparece parrafo icono 12 Meses de garantia
doceMeses.addEventListener("mouseout",desaparece12);
function desaparece12 (){
const quitar = document.getElementById("container_12Meses");
quitar.classList.add("pHechoCHile");
quitar.classList.remove("pHechoCHile1");

  }
  desaparece12 ();


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

}
apareceD48();

// evento con CLICK desaparece parrafo icono Despacho48H
Despacho48H.addEventListener("mouseout",desapareceD48);
function desapareceD48 (){
const quitar = document.getElementById("container_Despacho48");
quitar.classList.add("pHechoCHile");
quitar.classList.remove("pHechoCHile1");

  }
  desapareceD48 ();


const container_Despacho48 = document.getElementById("container_Despacho48");
container_Despacho48.innerHTML = "<p><b>¡Desp 48H habiles!</b> </p>"
container_Despacho48.className = "pHechoCHile"

/////////////////////////////////////////////////////////////////////////////////////////////
//mostrar stock de productos DeccoHouse
let CardsDeccoHouse = document.querySelector(`#CardsDeccoHouse`);
productosDeccoHouse.forEach(item =>{
let div = document.createElement("div");
div.innerHTML =`
<div class="card  divnor " style="width: 18rem; height: 350px">
  <img src="${item.img}" class="card-img-top" style="width: 17rem; height: 120px" alt="${item.id}">
  <div class="card-body">
    <h3 class="card-title">${item.nombre}</h3>
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
comprar.innerText = "AGREGAR AL CARRITO"
comprar.className = "botoncard"
div.append(comprar);
comprar.addEventListener("click",()=>{
  const sumarCantidad = carrito.some((repetiritem) => repetiritem.id === item.id );
  //Condicionales if y else
  if (sumarCantidad){
  carrito.map((it) =>{
  if(it.id === item.id ){
    it.cantidad ++
  }
  
  })
  
  }else{
      carrito.push({
        id : item.id,
        nombre : item.nombre,
        img : item.img,
        precio : item.precio,
        cantidad : item.cantidad
      });
    }
console.log(carrito);
numeroCarrito ();
guardarStorage();
mensajeAgregado()
})

})

/////////////////////////////////////////////////////////////////////////////////////////////
// mostrar en el DOOM nuevo array de productos filtrados Juego de terraza


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
    <h3 class="card-title">${item.nombre}</h3>
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
  const sumarCantidad = carrito.some((repetiritem) => repetiritem.id === item.id );

if (sumarCantidad){
carrito.map((it) =>{
if(it.id === item.id ){
  it.cantidad ++
}

})

}else{
    carrito.push({
      id : item.id,
      nombre : item.nombre,
      img : item.img,
      precio : item.precio,
      cantidad : item.cantidad
    });
  }  
  
  //carrito.push(item);
    console.log(carrito);
    numeroCarrito ();
    guardarStorage();
    mensajeAgregado();
});

});
}


////////////////////////////////////////////////////////////////////////////////////////////
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
    <h3 class="card-title">${item.nombre}</h3>
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
  const sumarCantidad = carrito.some((repetiritem) => repetiritem.id === item.id );
  
  if (sumarCantidad){
  carrito.map((it) =>{
  if(it.id === item.id ){
    it.cantidad ++
  }
  
  })
  
  }else{
      carrito.push({
        id : item.id,
        nombre : item.nombre,
        img : item.img,
        precio : item.precio,
        cantidad : item.cantidad
      });
    }

    console.log(carrito);
    numeroCarrito ();
    guardarStorage();
    mensajeAgregado();

});


})

}

/////////////////////////////////////////////////////////////////////////////////////////////
// mostrar en el DOOM nuevo array de productos filtrados sofas
const botonS = document.querySelector("#Sofas");
botonS.addEventListener ("click", Sofas);
function Sofas (){
document.querySelector("#CardsDeccoHouse").innerText = ``
let contenedor = document.querySelector("#CardsDeccoHouse");
filtrarSofas.forEach(item =>{//
  
let div = document.createElement("div");
div.innerHTML =`
<div class="card  divnor " style="width: 18rem; height: 350px">
  <img src="${item.img}" class="card-img-top" style="width: 17rem; height: 120px" alt="${item.id}">
  <div class="card-body">
    <h3 class="card-title">${item.nombre}</h3>
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

//AGREGAR ESTO A TODOS LOS PRODUCTOS DEL DOM Y LOS FILTROS
const sumarCantidad = carrito.some((repetiritem) => repetiritem.id === item.id );

if (sumarCantidad){
carrito.map((it) =>{
if(it.id === item.id ){
  it.cantidad ++
}

})

}else{
    carrito.push({
      id : item.id,
      nombre : item.nombre,
      img : item.img,
      precio : item.precio,
      cantidad : item.cantidad
    });
  }
  
    console.log(carrito);
    numeroCarrito ();
    guardarStorage();
    mensajeAgregado();

});

})

}

/////////////////////////////////////////////////////////////////////////////////
