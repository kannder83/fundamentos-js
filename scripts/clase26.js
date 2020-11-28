//tomar informacion de api

//datos de la API que va a alimentar el desarrollo:

const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";
const OPTS = { crossDomain: true };

/*
Se crea funcion para publicar en HTML.
*/

function escribirHtml(texto) {
  document.getElementById("paragraph").innerHTML += `${texto}<br>`;
}

function obtenerPersonaje(id, callback) {
  const URL = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
  $.get(URL, OPTS, function (personaje) {
    console.log(`Hola, mi nombre es ${personaje.name}`);
    escribirHtml(`Hola, mi nombre es ${personaje.name}`);
  });
  if (callback) {
    callback();
  }
}

//Se llama la funcion usando el callback:

obtenerPersonaje(1, function () {
  obtenerPersonaje(2, function () {
    obtenerPersonaje(3, function () {
      obtenerPersonaje(4);
    });
  });
});
