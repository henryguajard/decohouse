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
{id : 01, nombre: `Terraza Sofia`,img : "../imagenes/terraza01.jpg", precio: 499990, cantidad: 1},
{id : 02, nombre: `Terraza Alaya`,img : "../imagenes/terraza02.jpg" , precio: 599990, cantidad: 1},
{id : 03, nombre: `Terraza Arrayan `,img : "../imagenes/terraza03.jpg" , precio: 699990, cantidad: 1},
{id : 04, nombre: `Mesa bar TuHome`,img : "../imagenes/mesa01.jpeg" , precio: 1199990, cantidad: 1},
{id : 05, nombre: `Mesa Amazonas `,img : "../imagenes/mesa02.jpg", precio: 1299990, cantidad: 1},
{id : 06, nombre: `Mesa blue dark`,img : "../imagenes/mesa03.webp", precio: 1399990, cantidad: 1},
{id : 07, nombre: `Sofa slow`,img : "../imagenes/sofa01.jpg", precio: 499990, cantidad: 1},
{id : 08, nombre: `Sofa Kunza`,img : "../imagenes/sofa02.webp", precio: 399990, cantidad: 1},
{id : 09, nombre: `Sofa Essential`,img : "../imagenes/sofa03.jpg", precio: 299990, cantidad: 1}
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