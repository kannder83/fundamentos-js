//Programa de trabajo:

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

//Nuevo codigo con el async - await:

async function obtenerPersonajes() {
  let ids = [1, 2, 3, 4, 5, 6, 7];
  let promesas = ids.map((id) => obtenerPersonaje(id));
  try {
    let personajes = await Promise.all(promesas);
    console.log(personajes);
    for (let i = 0; i < personajes.length; i++) {
      escribirHtml(`El ID: ${i} es el personaje ${personajes[i].name}.`);
    }
  } catch {
    onError(id);
  }
}

//SE observa una mejora en los tiempos cuando se hacen las consultas.

obtenerPersonajes();
