//tomar informacion de api

//datos de la API que va a alimentar el desarrollo:

const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";

//Se puede acortar la URL:
const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(":id", 1)}`;
const OPTS = { crossDomain: true };

/*
Se crea funcion para publicar en HTML.
*/

function escribirHtml(texto) {
  document.getElementById("paragraph").innerHTML += `${texto}<br>`;
}

/*
Se arma la URL de la consulta. Como último parameto
se arma la data que se recibe por medio de una función.
*/

//Se puede enviar una función como parametro:

function onPeopleResponse(personaje) {
  console.log(`Hola, mi nombre es ${personaje.name}`);
  escribirHtml(`Hola, mi nombre es ${personaje.name}`);
}

//La consulta se puede simplificar en:

function obtenerPersonaje(id) {
  const URL = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
  $.get(URL, OPTS, onPeopleResponse);
}

//$.get(LUKE_URL, OPTS, onPeopleResponse);

//Se llama a la función.
obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);
