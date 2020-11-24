//Arrays

let alejandro = {
  nombre: "Alejandro",
  edad: 37,
  altura: 1.7,
};

let daniela = {
  nombre: "Daniela",
  edad: 23,
  altura: 1.5,
};

let jhon = {
  nombre: "Jhon",
  edad: 35,
  altura: 1.65,
};

let jairo = {
  nombre: "Jairo",
  edad: 39,
  altura: 1.7,
};

//Se crea un array:

let personas = [alejandro, daniela, jhon, jairo];

//Funcion es alta la persona?
const esAlta = (persona) => {
  return persona.altura >= 1.7;
};

//Para imprimir:

const escribirHtml = (texto) =>
  (document.getElementById("paragraph").innerHTML += texto);

//Utilizando el filtro:
//.filtrer ejecuta una funcion y se almacena en un array.

let personasAltas = personas.filter(esAlta);

console.log(personasAltas);

//No olvidar llamar la función:

for (let i = 0; i < personasAltas.length; i++) {
  escribirHtml(
    `${personasAltas[i].nombre} mide ${personasAltas[i].altura} metros. <br>`
  );
}
