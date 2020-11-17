//Funciones
let nombre = "Alejandro",
  edad = 37;

function imprimirEdad() {
  console.log(`${nombre} tiene ${edad} años`);
}

function htmlEdad() {
  document.getElementById(
    "paragraph"
  ).innerHTML += `${nombre} tiene ${edad} años <br>`;
}

imprimirEdad();
htmlEdad();

//Enviar parametros a una función:

function imprimirOtroNombreYEdad(n, e) {
  document.getElementById("paragraph").innerHTML += `${n} tiene ${e} años <br>`;
}

//Se envia los parametros:

imprimirOtroNombreYEdad("Daniela", 23);

/*
Las funciones son proceso de reutilizar código.
Tener presente que JS:
1. Es un lenguaje debilmente tipado.
2. Lenguaje interpretado.
*/
