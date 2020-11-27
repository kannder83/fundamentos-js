//Asincronismo
/*

no voy a bloquear el evenloop.
*/

//Todo se ejecuta de forma lineal

const REPETIR_EN_LA_NOCHE = 30;

for (let i = 0; i < REPETIR_EN_LA_NOCHE; i++) {}

document.getElementById("paragraph").innerHTML += `a <br>`;
document.getElementById("paragraph").innerHTML += `b <br>`;
document.getElementById("paragraph").innerHTML += `c <br>`;

document.getElementById("paragraph").innerHTML += `fin <br>`;

// Se puede dejar un timeout o tiempo para ejecutar las cosas luego de finalizar la revision de la cola.
//En el ejercicio se ejecuta todo y luego espera 2000 ms y ejecuta el otro código.
document.getElementById("paragraph").innerHTML += `a <br>`;
setTimeout(function () {
  document.getElementById("paragraph").innerHTML += `b <br>`;
}, 2000);
document.getElementById("paragraph").innerHTML += `c <br>`;
document.getElementById("paragraph").innerHTML += `fin <br>`;

//Si se deja un proceso en el programa principal que acapare mucho tiempo no va a ejecutar
// la cola en el tiempo indicado
