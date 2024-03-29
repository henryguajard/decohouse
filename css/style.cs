h2 {
  text-align: center;
}

.prub {
  list-style: none; /*maps sass*/
  text-align: left;
  background: linear-gradient(90deg, #C2BBF0 0%, #e698f0 100%);
}

.nabInd {
  margin-right: 80px;
}

.carro {
  margin-left: 20px;
}

.gale {
  margin-top: 15px;
}

.titulo {
  padding-top: 36px;
}

.ulpie {
  list-style: none; /*maps sass*/
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#pie {
  background: linear-gradient(90deg, #ac9ff8 0%, #bc3ccd 100%);
}

.mirada {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.icon {
  height: 300px;
}

.imgIcon:hover {
  border-radius: 2px;
  transform: scale(1.1, 1.1);
  transition: all 400ms ease;
}

.pHechoCHile {
  display: none;
}

.pHechoCHile1 {
  font-size: larger;
  color: #ac9ff8;
}

.filtros {
  height: 20px;
}

.tarjetas {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: auto;
  width: auto;
}

.left {
  height: 200px;
}

.conoce {
  height: 550px;
}

.fixed {
  position: fixed;
  right: 30px;
  bottom: 30px;
}

.divnor {
  background: linear-gradient(90deg, #ac9ff8 0%, #bc3ccd 100%);
}

.norton {
  margin-left: 615px;
  background: linear-gradient(90deg, #ac9ff8 0%, #bc3ccd 100%);
}

.btn:hover {
  background-color: #ac9ff8;
}

.colorbotton {
  border-radius: 3px;
  border: none;
  text-transform: uppercase;
  outline: 0;
  padding: 10px;
  background: linear-gradient(90deg, #ac9ff8 0%, #2c0232 100%);
  text-align: center;
  transition: color 0.2s linear;
  cursor: pointer;
  width: 100%;
  font-size: 15px;
}

.titulocard {
  margin-top: 70px;
}

.CuerpCard {
  background: linear-gradient(90deg, #ac9ff8 0%, #bc3ccd 100%);
}

.botoncard {
  border-radius: 3px;
  border: none;
  text-transform: uppercase;
  outline: 0;
  padding: 10px;
  background: linear-gradient(90deg, #ac9ff8 0%, #bc3ccd 100%);
  text-align: center;
  transition: color 0.2s linear;
  cursor: pointer;
  width: 100%;
  font-size: 15px;
}

.botoncard:hover {
  color: #ac9ff8;
}

#iconoCarro {
  cursor: pointer;
}

#containerCarrito {
  width: 80%;
  margin: 0 10%;
  max-height: 88vh;
  color: black;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 8px 32px 0 rgba(40, 58, 135, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  overflow: auto;
  z-index: 9;
  top: 12vh;
  scrollbar-color: none;
}

#containerCarrito::before {
  content: "";
  background: rgba(0, 0, 0, 0.5);
  z-index: -1;
}

#containerCarrito::-webkit-scrollbar {
  display: none;
}

.headCarrito {
  display: flex;
  justify-content: space-between;
  background: linear-gradient(90deg, #ac9ff8 0%, #bc3ccd 100%);
  color: aliceblue;
  width: 100%;
}

.titleCarrito {
  color: black;
  justify-self: start;
}

.cerrarCarrito {
  cursor: pointer;
}

.bodyCarrito {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin: 10px;
}

.bodyCarrito img {
  margin-right: 0px;
  height: 120px;
  width: 160px;
}

.contenerTotalCarrito {
  font-size: 25px;
  padding: 20px;
  text-align: center;
  padding-top: 20px;
}

.bodyCarrito .eliminarCarrito {
  cursor: pointer;
}

.icContarcarrito {
  background-color: #bc3ccd;
  color: aliceblue;
  border-radius: 55%;
  font-size: 12px;
  font-weight: 400;
  padding: 4px;
  top: 37px;
  right: 74px;
  position: absolute;
  display: none;
}

.eliminarCarrito {
  margin-left: 0px;
}

.contenedorcardindex {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contenedorcardindex.cardindex {
  height: 250px;
  width: 200px;
  background-color: #ac9ff8;
  border-radius: 10%;
  box-shadow: 16px 14px 20px #44424c;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

/*# sourceMappingURL=style.cs.map */
