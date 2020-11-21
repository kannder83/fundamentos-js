//EStructuras repetitivas: FOR

let alejandro = {
  nombre: "Alejandro",
  apellido: "Ruiz",
  edad: 37,
  peso: 70,
};

function escribirHtml(texto) {
  document.getElementById("paragraph").innerHTML += texto;
}

escribirHtml(
  `Al inicio del año ${alejandro.nombre} pesa ${alejandro.peso} kg. <br>`
);

//Constantes:

const INCEMENTE_PESO = 0.2;
const DIAS_DEL_ANNIO = 365;

//Funcion tipo arrow:

const aumentarDePeso = (persona) => (persona.peso += INCEMENTE_PESO);
const adelgazar = (persona) => (persona.peso -= INCEMENTE_PESO);

//Ciclo for:

for (let i = 1; i <= DIAS_DEL_ANNIO; i++) {
  let random = Math.random();

  if (random < 0.25) {
    //IncrementaPeso
    aumentarDePeso(alejandro);
  } else if (random < 0.5) {
    //DecrementaPeso
    adelgazar(alejandro);
  }
}

escribirHtml(
  `Al final del año ${alejandro.nombre} pesa ${alejandro.peso.toFixed(
    1
  )} kg. <br>`
);
