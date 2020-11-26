// Clases | Prototipos

//Escribir en el HTML
function escribirHtml(escribir) {
  document.getElementById("paragraph").innerHTML += `${escribir}<br>`;
}

//Class Persona
class Persona {
  constructor(nombre, apellido, altura) {
    (this.nombre = nombre), (this.apellido = apellido), (this.altura = altura);
  }
  //Se agrega Metodo Saludar:
  saludar(fn) {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}.`);
    escribirHtml(`Hola, me llamo ${this.nombre} ${this.apellido}.`);
    if (fn) {
      fn(this.nombre, this.apellido, false);
    }
  }
  //Se agrega el Metodo soyAlto
  soyAlto() {
    return this.altura > 1.8;
  }
}

//Se crea la clase Desarrollador:
class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura);
  }
  //Se crea el metodo Saludar, incluye funcion como método.
  saludar(fn) {
    escribirHtml(
      `Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador.`
    );
    console.log(
      `Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador.`
    );
    //Se agrega la respueta a la funcion:
    if (fn) {
      fn(this.nombre, this.apellido, true);
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen día ${nombre} ${apellido}`);
  escribirHtml(`Buen día ${nombre} ${apellido}`);
  if (esDev) {
    console.log(`Ah mirá, no sabia que eras desarrollador/a.`);
    escribirHtml(`Ah mirá, no sabia que eras desarrollador/a.`);
  }
}

let alejandro = new Persona("Alejandro", "Ruiz", 1.7);
let daniela = new Persona("Daniela", "Perez", 1.5);
let thomas = new Desarrollador("Thomas", "Solano", 1.7);

//Se incluye la respuesta como parametro de la función:
alejandro.saludar();
daniela.saludar(responderSaludo);
thomas.saludar(responderSaludo);
