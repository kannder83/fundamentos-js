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
  saludar() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}.`);
    escribirHtml(`Hola, me llamo ${this.nombre} ${this.apellido}.`);
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
  //Se crea el metodo Saludar
  saludar() {
    escribirHtml(
      `Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador.`
    );
    console.log(
      `Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador.`
    );
  }
}

//Se crean los objetos de Persona:
let alejandro = new Persona("Alejandro", "Ruiz", 1.7);
let fernanda = new Persona("Fernanda", "Davila", 1.9);

//Se crean los objetos de Desarrollador:
let diego = new Desarrollador("Diego", "Ortiz", 1.84);

//Se llaman los objetos de Persona:
alejandro.saludar();
alejandro.soyAlto();

//Se llama la funcion del prototipo:
diego.saludar();
