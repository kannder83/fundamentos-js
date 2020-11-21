// Estructura Do While

let contador = 0;

const escribirHtml = (texto) =>
  (document.getElementById("paragraph").innerHTML += texto);

const llueve = () => Math.random() < 0.25;

do {
  contador++;
} while (!llueve());

if (contador == 1) {
  escribirHtml(`Fui a ver si llovia ${contador} vez.`);
} else {
  escribirHtml(`Fui a ver si llovia ${contador} veces.`);
}
