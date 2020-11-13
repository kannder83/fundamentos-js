let nombre = "Alejandro";
apellido = "Ruiz";

// convertir el nombre en mayusculas:

let nombreEnMayusculas = nombre.toUpperCase();
console.log(nombreEnMayusculas);
document.getElementById("pharagraph").innerHTML = `${nombreEnMayusculas} <br>`;

//Convierte el apellido en minusculas:

let apellidoEnMinusculas = apellido.toLowerCase();
console.log(apellidoEnMinusculas);
document.getElementById(
  "pharagraph"
).innerHTML += `${apellidoEnMinusculas} <br>`;

//Devuelve la prima letra de un strig:

let primeraLetraDelNombre = nombre.charAt(0);
console.log(primeraLetraDelNombre);
document.getElementById(
  "pharagraph"
).innerHTML += `${primeraLetraDelNombre} <br>`;

//¿Cuantos caracteres tiene un strign?

let cantidadDeLetrasDelNombre = nombre.length;
console.log(cantidadDeLetrasDelNombre);
document.getElementById(
  "pharagraph"
).innerHTML += `${cantidadDeLetrasDelNombre} <br>`;

//Concatenar 2 string:

let nombreCompleto = nombre + " " + apellido;
document.getElementById("pharagraph").innerHTML += `${nombre} ${apellido} <br>`;

document.getElementById(
  "pharagraph"
).innerHTML += `${nombre} ${apellido.toUpperCase()} <br>`;

//Tomar varios caracteres de un string:

let tomarLetrasNombre = nombre.substr(1, 2);
console.log(tomarLetrasNombre);
document.getElementById("pharagraph").innerHTML += `${tomarLetrasNombre} <br>`;

//Mostrar la ultima letra del nombre:
let ultimaLetraDeNombre = nombre.charAt(nombre.length - 1);
console.log(ultimaLetraDeNombre);
document.getElementById(
  "pharagraph"
).innerHTML += `${ultimaLetraDeNombre} <br>`;

/*
Interpolación de Texto se utiliza con el caracter especial $ y luego "{" "}"
la variable se escribe en medio.
*/
