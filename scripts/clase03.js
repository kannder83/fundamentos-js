let edad = 27;

document.getElementById("paragraph").innerHTML += `Edad: ${edad} <br>`;

//Incrementa en 2
edad += 1;

document.getElementById("paragraph").innerHTML += `Edad: ${edad} <br>`;

let peso = 65;

//Decrementa en 2.
peso -= 2;

document.getElementById("paragraph").innerHTML += `Su peso es: ${peso} <br>`;

//Para sumar dos variables:

let sanduche = 1;

peso = peso + sanduche;

document.getElementById(
  "paragraph"
).innerHTML += `Ahora el peso es = ${peso} <br>`;

//Forma de hacer la resta a una misma variable:

let hacerDeporte = 4;
peso -= hacerDeporte;
document.getElementById(
  "paragraph"
).innerHTML += `El nuevo peso luego de la resta es ${peso} <br>`;

//Manejando decimales:

let vino = 200.3;
let total = vino * 3;
document.getElementById(
  "paragraph"
).innerHTML += `Total de vinos es ${total} <br>`;

//Para hacer redondeo de js se utiliza math.
//También se puede utlizar toFixed para indicar el numero de decimales que se quieren.

document.getElementById(
  "paragraph"
).innerHTML += `Total de vinos es ${total.toFixed(2)} <br>`;

//parseFloat
//Para que un string se vuelva número.
document.getElementById(
  "paragraph"
).innerHTML += `Total de vinos Número ${parseFloat(total.toFixed(2))} <br>`;

//Para dividir:

let personas = 2;
let porciones = 8;

let cantidadDePorcionesPorPersona = porciones / personas;
document.getElementById(
  "paragraph"
).innerHTML += `Cantidad de porciones por persona ${cantidadDePorcionesPorPersona}`;
