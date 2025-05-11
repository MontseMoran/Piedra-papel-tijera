/*PASOS EN HUMANO pIEDRA PAPEL O TIJERA
1. jugadora elige piedra, papel o tijera
2. ordenador Genera un número aleatorio entre 1 y 9
3. al hacer clic en el botón, se compara la elección del jugador con la elección del ordenador
 si el jugador elige piedra y el ordenador tijera, gana el jugador
 si el jugador elige papel y el ordenador piedra, gana el jugador
 si el jugador elige tijera y el ordenador papel, gana el jugador 
 si el jugador elige piedra y el ordenador papel, gana el ordenador
 si el jugador elige papel y el ordenador tijera, gana el ordenador
 si el jugador elige tijera y el ordenador piedra, gana el ordenador
 si el jugador elige piedra y el ordenador piedra, empatan
 si el jugador elige papel y el ordenador papel, empatan
 si el jugador elige tijera y el ordenador tijera, empatan
4. el resultado se muestra en la pantalla y se acumula en el contador
5 finaliza el juego al realizar 10 jugadas
6 se muestra el resultado final
7. si gana jugadora se tira confeti
8. si gana ordenador aparece mensaje de ánimo ;)
9. si empatan, se muestra mensaje de ánimo
10. se reinicia el juego
11. se reinicia el contador

  }


*/
const jugadora = document.querySelector(".js-select");
const eleccionJugadora = jugadora.value;
const btn = document.querySelector(".js-btn");
const movOrdenador = Math.ceil(Math.random() * 9) + 1; // Genera un número aleatorio entre 1 y 9
const result = document.querySelector(".js-result");
let quienGana = "";
let contJugadora = 0;
let contOrdenador = 0;
let contJugadas = 0;
const botonReiniciar = document.querySelector(".js-btn2");

function jugada() {
  const eleccionJugadora = jugadora.value;
  let movOrdenador = Math.ceil(Math.random() * 9) + 1;
  if (movOrdenador <= 3) {
    movOrdenador = "Piedra";
  } else if (movOrdenador >= 7) {
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
    contJugadora++;
    document.querySelector(
      ".js-contJugadora"
    ).innerHTML = `jugadora: ${contJugadora}`;
  } else if (
    (eleccionJugadora === "Piedra" && movOrdenador === "Papel") ||
    (eleccionJugadora === "Papel" && movOrdenador === "Tijera") ||
    (eleccionJugadora === "Tijera" && movOrdenador === "Piedra")
  ) {
    quienGana = "Perdiste!";
    result.style.color = "red";
    contOrdenador++;
    document.querySelector(
      ".js-contOrdenador"
    ).innerHTML = `ordenador: ${contOrdenador}`;
  } else {
    quienGana = "Empate!";
    result.style.color = "black";
  }
  result.innerHTML = `<span style = "color:#6A5ACD"> Ordenador: ${movOrdenador}</span><br> Resultado: ${quienGana}`;
  contJugadas++;
  if (contJugadas === 5) {
    if (contJugadora > contOrdenador) {
      result.innerHTML += `<br><strong>Ganaste el juego! 🎉😊</strong>`;
    } else if (contJugadora < contOrdenador) {
      result.innerHTML += `<br><strong>¡El ordenador ganó! 😢</strong><br>¡Ánimo, lo harás mejor la próxima vez! 💪`;
    } else {
      result.innerHTML += `<br><strong>¡Empate! 🤝</strong><br>¡Gran partida!`;
    }
  }
}
function reiniciarJuego() {
document.querySelector(".js-contJugadora").innerHTML = `jugadora: 0`;
document.querySelector(".js-contOrdenador").innerHTML = `ordenador: 0`;

}
btn.addEventListener("click", jugada);
botonReiniciar.addEventListener("click", reiniciarJuego);
