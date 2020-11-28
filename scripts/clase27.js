//Copia del programa a trabajar:

const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id/";

const opts = { crossDomain: true };

//Escrbit el HTML:
function escribirHtml(texto) {
  document.getElementById("paragraph").innerHTML += `${texto}<br>`;
}

function persona(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;

    $.get(url, opts, function (data) {
      resolve(data);
    }).fail(() => reject(id));
  });
}

function onError(id) {
  console.log(`Sucedió un error al obtener el personaje ${id}`);
  escribirHtml(`Sucedió un error al obtener el personaje ${id}`);
}

persona(1)
  .then(function (personaje) {
    console.log(`El personaje 1 es ${personaje.name}`);
    escribirHtml(`El personaje 1 es ${personaje.name}`);
  })
  .catch(onError);
