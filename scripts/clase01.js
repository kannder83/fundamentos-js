let nombre = "Alejandro";
apellido = "Ruiz";
let edad = 28;

document.getElementById("pharagrap").innerHTML += `${nombre} ${apellido} <br>`;
document.getElementById("pharagrap").innerHTML += `${edad} <br>`;

edad = "28 años";
console.log("Hola " + nombre + " " + apellido);
console.log("Tengo " + edad);

let peso = 75;

document.getElementById(
  "pharagrap"
).innerHTML += `Hola: ${nombre} ${apellido} <br>`;
document.getElementById("pharagrap").innerHTML += `Tengo: ${edad}<br>`;

/*
Se puede llamar como Let o como var. 
Utilizo let.
los valores se pueden actualizar.
JS Es debilmente tipado.
*/
