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

//Desafio
function imprimirSiEsMayorEdad(persona) {
  //sasha es mayor de edad o menor de edad.
  if (persona.edad >= 18) {
    console.log(`${persona.nombre} es mayor de edad.`);
  } else {
    console.log(`${persona.nombre} no es mayor de edad.`);
  }
}

imprimirSiEsMayorEdad(alejandro);
