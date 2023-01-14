//! Referencias del DOM
const btnNewGame = document.querySelector('#btnNewGame')

// Variables
let baraja = [];

const tipos = ["C", "D", "H", "S"], especiales = ["A", "J", "Q", "K"];
//* C = Treboles
//* D = DIamantas
//* H = Corazones
//* S = Espadas

//* Inicializa la app
const init = () => {

    baraja = crearBaraja();
    // TODO: Crear baraja

    // TODO: Inicializar puntos de jugadores

}

//* Se encarga de crear la baraja
const crearBaraja = () => {
    baraja = []

    // for
}

//! Eventos
btnNewGame.addEventListener('click', () => {
    console.log("Acaba de darle clic al boton nuevo juego")
});
// console.log("Boton nuevo juego", btnNewGame)