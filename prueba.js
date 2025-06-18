const btn = document.querySelector(".js-btn");
const result = document.querySelector(".js-result");
let quienGana = "";
let contJugadoraInicial = 0;
let contOrdenadorInicial = 0;
let contJugadas = 0;
const botonReiniciar = document.querySelector(".js-btn2");
const contJugadora = document.querySelector(".js-contJugadora");
const contOrdenador = document.querySelector(".js-contOrdenador");
const contPartidas = document.querySelector(".js-contPartidas");

function generarNumeroAleatorio() {
  return Math.ceil(Math.random() * 9);
}

function jugada() {
  result.innerHTML = "";

  const eleccion = document.querySelector('input[name="jugada"]:checked');
  if (!eleccion) {
    result.innerHTML = "Por favor, elige una jugada";
    return;
  }
  const eleccionJugadora = eleccion.value;

  if (contJugadas < 5) {
    const movOrdenadorNumero = generarNumeroAleatorio();
    let movOrdenador = "";

    if (movOrdenadorNumero <= 3) {
      movOrdenador = "Piedra";
    } else if (movOrdenadorNumero >= 7) {
      movOrdenador = "Papel";
    } else {
      movOrdenador = "Tijera";
    }

    if (
      (eleccionJugadora === "Piedra" && movOrdenador === "Tijera") ||
      (eleccionJugadora === "Papel" && movOrdenador === "Piedra") ||
      (eleccionJugadora === "Tijera" && movOrdenador === "Papel")
    ) {
      quienGana = "Ganaste!";
      result.style.color = "green";
      contJugadoraInicial++;
      contJugadora.innerHTML = `jugadora: ${contJugadoraInicial}`;
    } else if (
      (eleccionJugadora === "Piedra" && movOrdenador === "Papel") ||
      (eleccionJugadora === "Papel" && movOrdenador === "Tijera") ||
      (eleccionJugadora === "Tijera" && movOrdenador === "Piedra")
    ) {
      quienGana = "Perdiste!";
      result.style.color = "red";
      contOrdenadorInicial++;
      contOrdenador.innerHTML = `ordenador: ${contOrdenadorInicial}`;
    } else {
      quienGana = "¡Empate!";
      result.style.color = "black";
    }

    result.innerHTML = `<span style="color:#6A5ACD">Ordenador: ${movOrdenador}</span><br>Resultado: ${quienGana}`;
    contJugadas++;
    contPartidas.innerHTML = `Partida: ${contJugadas}/5`;
  }

  if (contJugadas === 5) {
    const pantallaFinal = document.querySelector(".js-pantalla-final");
    const mensajeFinal = document.querySelector(".mensaje-final");
    const contenedorJuego = document.querySelector(".js-container");

    if (contJugadoraInicial > contOrdenadorInicial) {
      mensajeFinal.textContent = "¡Has ganado el juego! 🎉😊";
    } else if (contJugadoraInicial < contOrdenadorInicial) {
      mensajeFinal.textContent = "El ordenador ha ganado 😢 ¡Ánimo!";
    } else {
      mensajeFinal.textContent = "¡Empate! 🤝 Muy buena partida.";
    }

    pantallaFinal.classList.remove("hidden");
    contenedorJuego.classList.add("hidden");
    result.innerHTML = "";
  }
}

function reiniciarJuego() {
  contJugadora.innerHTML = `jugadora: 0`;
  contOrdenador.innerHTML = `ordenador: 0`;
  result.innerHTML = "";
  contPartidas.innerHTML = `Partida: 0/5`;
  contJugadoraInicial = 0;
  contOrdenadorInicial = 0;
  contJugadas = 0;

  // Mostrar el juego de nuevo
  document.querySelector(".js-container").classList.remove("hidden");
  document.querySelector(".js-pantalla-final").classList.add("hidden");
}

btn.addEventListener("click", jugada);
botonReiniciar.addEventListener("click", reiniciarJuego);
