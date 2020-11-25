//Arrays

let alejandro = {
  nombre: "Alejandro",
  edad: 37,
  altura: 1.7,
  cantidadDeLibros: 15,
};

let daniela = {
  nombre: "Daniela",
  edad: 23,
  altura: 1.5,
  cantidadDeLibros: 23,
};

let jhon = {
  nombre: "Jhon",
  edad: 35,
  altura: 1.65,
  cantidadDeLibros: 78,
};

let jairo = {
  nombre: "Jairo",
  edad: 39,
  altura: 1.7,
  cantidadDeLibros: 96,
};

//Se crea un array:

let personas = [alejandro, daniela, jhon, jairo];

//Para imprimir:

const escribirHtml = (texto) =>
  (document.getElementById("paragraph").innerHTML += texto);

//Se crea una funcion que apunta al desglose y crea un nuevo elemento para no sobre escribir.

const pasarAlturaACms = (persona) => {
  return {
    ...persona,
    altura: persona.altura * 100,
  };
};

//Una funcion que acumula los valores de libros:
const reducer = (acum, personas) => {
  return acum + personas.cantidadDeLibros;
};

//Otra forma de escribir lo de arriba ^
/*
    const pasarAlturaACms = persona => ({
      ...persona,
      altura: persona.altura*100,
    })
*/

console.log(pasarAlturaACms);

//Utilizando metodo .map:
let personasCms = personas.map(pasarAlturaACms);

//No olvidar llamar la función:
for (let i = 0; i < personasCms.length; i++) {
  escribirHtml(`${personasCms[i].altura}<br>`);
}

escribirHtml(`Fin del primera parte ------- <br>`);

for (let i = 0; i < personas.length; i++) {
  escribirHtml(`${personas[i].altura}<br>`);
}

escribirHtml(`Fin del segunda parte ------- <br>`);

//Se crea una funcion para acumular un total:
let totalDeLibros = personas.reduce(reducer, 0);

//Se escribe en el html
escribirHtml(`El total de libros leidos por todos es de ${totalDeLibros}.`);
