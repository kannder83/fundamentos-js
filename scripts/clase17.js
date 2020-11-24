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
