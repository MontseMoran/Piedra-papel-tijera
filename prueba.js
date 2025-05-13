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
const numAleatorio = Math.ceil(Math.random() * 9) ;
return numAleatorio;
}

function jugada() {
  result.innerHTML = "";
  if(jugadora.value === "js-selection") {result.innerHTML = "Por favor, elige una jugada";
  return;}
if (contJugadas < 5) {
  const movOrdenadorNumero = generarNumeroAleatorio();
  let movOrdenador = "";
  const eleccionJugadora = jugadora.value;

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
  result.innerHTML = `<span style = "color:#6A5ACD"> Ordenador: ${movOrdenador}</span><br> Resultado: ${quienGana}`;
  contJugadas++;
  contPartidas.innerHTML = `Partida: ${contJugadas}/5`;
  } else if (contJugadas === 5) {
    if (contJugadoraInicial > contOrdenadorInicial) {
     
      result.innerHTML += `<br><strong>Ganaste el juego! 🎉😊</strong>`;
    } else if (contJugadoraInicial < contOrdenadorInicial) {
       
      result.innerHTML += `<br><strong>¡El ordenador ganó! 😢</strong><br>¡Ánimo, lo harás mejor la próxima vez! 💪`;
    } else {
      
      result.innerHTML += `<br><strong>¡Empate! 🤝</strong><br>¡Gran partida!`;
    }
  }
}
function reiniciarJuego() {
document.querySelector(".js-contJugadora").innerHTML = `jugadora: 0`;
document.querySelector(".js-contOrdenador").innerHTML = `ordenador: 0`;
result.innerHTML = "";
contPartidas.innerHTML = `Partida: 0/5`;

}
btn.addEventListener("click", jugada);
botonReiniciar.addEventListener("click", reiniciarJuego);
