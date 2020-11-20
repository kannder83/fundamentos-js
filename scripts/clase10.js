//condicionales

let alejandro = {
  nombre: "Alejandro",
  apellido: "Ruiz",
  edad: 38,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  drone: true,
};

let juan = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 14,
};

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`);

  if (persona.ingeniero) {
    console.log("Ingeniero");
  } else {
    console.log("No soy ingeniero.");
  }

  if (persona.dj) {
    console.log("DJ");
  }
  if (persona.cocinero) {
    console.log("cocinero");
  }
  if (persona.cantante) {
    console.log("Cantante");
  }
  if (persona.guitarrista) {
    console.log("Guitarrista");
  }
  if (persona.drone) {
    console.log("Piloto de Dron");
  }
}

imprimirProfesiones(alejandro);

//Clase

//Crear una constante:
const MAYORIA_DE_EDAD = 18;

//Crear una nueva funcion:

function esMayorDeEdad(persona) {
  return persona.edad >= MAYORIA_DE_EDAD;
}

function imprimirSiEsMayorEdad(persona) {
  //sasha es mayor de edad o menor de edad.
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad.`);
    escribirHtml(`${persona.nombre} es mayor de edad.`);
  } else {
    console.log(`${persona.nombre} es menor de edad.`);
    escribirHtml(`${persona.nombre} es menor de edad.`);
  }
}

function escribirHtml(texto) {
  document.getElementById("paragraph").innerHTML += `${texto} <br>`;
}

imprimirSiEsMayorEdad(alejandro);
imprimirSiEsMayorEdad(juan);
