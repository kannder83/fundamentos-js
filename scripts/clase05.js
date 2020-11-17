//Alcance de las funciones.
//variable global.
let nombre = "Alejandro";

//Definir funcion. La variable es de alcance global.

function imprimirNombreMayusculas(n) {
  n = n.toUpperCase();
  document.getElementById("paragraph").innerHTML += `${n} <br>`;
}

//Se llama la funcion.
imprimirNombreMayusculas(nombre);

//SE puede enviar parametro directo o se puede enviar una variable.
imprimirNombreMayusculas("Daniela");
