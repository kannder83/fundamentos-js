//Copia del programa a trabajar:

const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id/";

const opts = { crossDomain: true };

//Escrbit el HTML:
function escribirHtml(texto) {
  document.getElementById("paragraph").innerHTML += `${texto}<br>`;
}

function obtenerPersonaje(id) {
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

// Se crea un array con los Id que se quieren consultar:

let ids = [1, 2, 3, 4, 5, 6, 7];

//Se crea la función que permite buscar los personajes:

let promesas = ids.map((id) => obtenerPersonaje(id));

Promise.all(promesas)
  .then((personajes) => {
    console.log(personajes);
    for (let i = 0; i < personajes.length; i++) {
      escribirHtml(`El ID: ${i} es el personaje ${personajes[i].name}.`);
    }
  })
  .catch(onError);

//SE observa una mejora en los tiempos cuando se hacen las consultas.
