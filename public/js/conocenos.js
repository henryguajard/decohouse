//OCUPAMOS API RANDOMUSER PARA GENERAR LOS REALIZADORES DE LA PAGINA

function realizadores(){
    fetch(`https://randomuser.me/api/?results=3`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
      let realizador1 = data.results;
      //console.log(realizador1);
      let salida = `
      <div class= "row " >
      <h2 class="spacioConocenos border border-danger-subtle" >Realizadores del sitio web :</h2>
      </div>
      `;
    
      realizador1.forEach(function(list){
    salida += `
   
    <div class="container card colorbotton  imgIcon "  style="width: 19rem; height: 400px">
    <div class="card-body  border-dark-subtle " >
    <img src="${list.picture.large}" class="card-img-top"  style="width: 16rem; height: 190px"  alt="perfil de usuario" id="foto">
    <h4 class= "card-title border-bottom">Nombre: ${list.name.first} <span id="nombre"></span></h4>
    <h4 class= "card-title border-bottom">Apellido: ${list.name.last}<span id="apellido"></span></h4>
    <h6 class= "card-title">Correo: ${list.email}<span id="correo"></span></h6>
    </div>
    </div>
    `;
    
      });
    document.querySelector(`#salida`).innerHTML =salida;   
    
    });
    
    }
    realizadores();

  





