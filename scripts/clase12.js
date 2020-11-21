// Estructura WHILE

//Variables
let alejandro = {
  nombre: "Alejandro",
  edad: 37,
  peso: 65,
};

//constantes
const INCREMENTO_PESO = 0.2;
const DIAS_DEL_ANNIO = 365;
const META = alejandro.peso - 3;
let dias = 0;

//funciones
const escribirHtml = (texto) =>
  (document.getElementById("paragraph").innerHTML += texto);
const aumentarDePeso = (persona) => (persona.peso += INCREMENTO_PESO);
const adelgazar = (persona) => (persona.peso -= INCREMENTO_PESO);
const comeMucho = () => Math.random() < 0.2;
const realizaDeporte = () => Math.random() < 0.5;

//Estrucutra WHILE:
while (alejandro.peso > META) {
  if (comeMucho()) {
    //Aumenta de peso
    aumentarDePeso(alejandro);
  } else if (realizaDeporte()) {
    //Baja de peso
    adelgazar(alejandro);
  }
  dias += 1;
}

//Escribe en el HTML
escribirHtml(
  `Pasaron ${dias} días hasta que ${alejandro.nombre} adelgazo 3kg.<br>`
);
