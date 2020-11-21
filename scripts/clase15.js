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

//Para recorrer el array usamos un FOR:

for (let i = 0; i < personas.length; i++) {
  let persona = personas[i];
  escribirHtml(`${persona.nombre} mide ${persona.altura} metros. <br>`);
}

//No olvidar llamar la función:
