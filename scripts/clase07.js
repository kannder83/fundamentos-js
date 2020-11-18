// Desestructurar objetos
let dario = {
  nombre: "Dario",
  apellido: "Perez",
  edad: 27,
};

let sacha = {
  nombre: "Sacha",
  apellido: "Perez",
  edad: 28,
};

function imprimirNombreEnMayuscula(persona) {
  //let nombre = persona.nombre;
  let { nombre } = persona;
  console.log(nombre.toUpperCase());
}

imprimirNombreEnMayuscula(dario);

function imprimirNombreYEdad(personal) {
  //hola me llamo sacha y tengo 28 años.
  //hola me llamo dario y tengo 27 años.
  let { nombre } = personal;
  let { edad } = personal;
  console.log("Hola me llamo " + nombre + " y tengo " + edad + " años.");
  document.getElementById(
    "paragraph"
  ).innerHTML += `Hola me llamo ${nombre} y tengo ${edad} años <br>`;
}

imprimirNombreYEdad(dario);
imprimirNombreYEdad(sacha);

//Se altera el valor del objeto.

function cumpleannios(persona) {
  persona.edad += 1;
}

//cumpleannios(sacha);

// Otra forma de lograr el cometido:

function cumple(persona) {
  return {
    ...persona,
    edad: persona.edad + 1,
  };
}
