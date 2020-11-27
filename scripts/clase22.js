//Asincronismo
/*

no voy a bloquear el evenloop.
*/

const REPETIR_EN_LA_NOCHE = 30;

for (let i = 0; i < REPETIR_EN_LA_NOCHE; i++) {
  document.getElementById("paragraph").innerHTML += `${
    i + 1
  }. No voy a bloquear el EventLoop <BR>`;
}
