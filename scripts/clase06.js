//Clasr de Objetos
let nombre = "Alejandro";
const parrafo = "paragraph";

//Función
function imprimirNombreEnMayusculas(nombre) {
  nombre = nombre.toUpperCase();
  document.getElementById(parrafo).innerHTML += `${nombre} <br>`;
  console.log(nombre);
}

imprimirNombreEnMayusculas(nombre);

//Se crea el objeto:

let sacha = {
  nombre: "Sacha",
  apellido: "Lifszyc",
  edad: 28,
};

//Para imprimir el valor:

imprimirNombreEnMayusculas(sacha.nombre);

// Otra forma es utilizar el objeto completo, sin necesidad de acceder al atributo.

function imprimirNombreEnMayusculaObjeto(persona) {
  let nombre = persona.nombre.toUpperCase();
  document.getElementById(parrafo).innerHTML += `${nombre} <br>`;
}

imprimirNombreEnMayusculaObjeto(sacha);

//Se puede traer solo el atributo.
// No declarar 2 veces la variable.

function imprimirNombreEnMayusculaAtributo({ nombre }) {
  let name = nombre.toUpperCase();
  document.getElementById(parrafo).innerHTML += `${name} <br>`;
}

imprimirNombreEnMayusculaAtributo(sacha);
