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
{id : 1, nombre: `Terraza Sofia`,img : "../img/terraza01.jpg", precio: 499990, cantidad: 1},
{id : 2, nombre: `Terraza Alaya`,img : "../img/terraza02.jpg" , precio: 599990, cantidad: 1},
{id : 3, nombre: `Terraza Arrayan `,img : "../img/terraza03.jpg" , precio: 699990, cantidad: 1},
{id : 4, nombre: `Mesa bar TuHome`,img : "../img/mesa01.jpeg" , precio: 1199990, cantidad: 1},
{id : 5, nombre: `Mesa Amazonas `,img : "../img/mesa02.jpg", precio: 1299990, cantidad: 1},
{id : 6, nombre: `Mesa blue dark`,img : "../ig/mesa03.webp", precio: 1399990, cantidad: 1},
{id : 7, nombre: `Sofa slow`,img : "../img/sofa01.jpg", precio: 499990, cantidad: 1},
{id : 8, nombre: `Sofa Kunza`,img : "../img/sofa02.webp", precio: 399990, cantidad: 1},
{id : 9, nombre: `Sofa Essential`,img : "../img/sofa03.jpg", precio: 299990, cantidad: 1}
];


function mensajeAgregadoHenry()  {
    Swal.fire({
      title: 'Desarrollador Henry Guajardo!',
      text: ' visitame en github.com/henryguajard',
      imageUrl: 'https://lh3.googleusercontent.com/a/AGNmyxbLaJIZ0pQlTQJ-tQKA9WVsFAVuBdAe0H9EcCBakHE=s288',
      imageWidth: 100,
      imageHeight: 100,
      imageAlt: 'Custom image',
      width:'40%'
    })


  }   
//Github realizador del proyecto github.com/henryguajard
  const mensajeHenry = document.querySelector(`#mensajeHenry`);
  mensajeHenry.addEventListener("click" ,() => {
    console.log(mensajeHenry);
    mensajeAgregadoHenry();



  });