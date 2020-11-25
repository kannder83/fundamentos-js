// Clases | Prototipos

//Escribir en el HTML
function escribirHtml(escribir) {
  document.getElementById("paragraph").innerHTML += `${escribir}<br>`;
}

//Funcion que realiza el proceso de "Heredar":
function heredaDe(prototipoHijo, prototipoPadre) {
  let fn = function () {};
  fn.prototype = prototipoPadre.prototype;
  prototipoHijo.prototype = new fn();
  prototipoHijo.prototype.constructor = prototipoHijo;
}

//Constructor:
function Persona(nombre, apellido, altura) {
  (this.nombre = nombre), (this.apellido = apellido), (this.altura = altura);
}

//Invocar una función: Saludar
Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}.`);
  escribirHtml(`Hola, me llamo ${this.nombre} ${this.apellido}.`);
};

//Incocar una funcion: Soy Alto
Persona.prototype.soyAlto = function () {
  return this.altura > 1.8;
};

//Se crea el prototipo Desarrollador:
function Desarrollador(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

//Se utiliza la funcion que vincula el prototipoHijo con el prototipoPadre:
heredaDe(Desarrollador, Persona);

//En el ejemplo se reemplaza solo para Desarrollador la funcion de saludo:
Desarrollador.prototype.saludar = function () {
  console.log(
    `Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador.`
  );
  escribirHtml(
    `Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador.`
  );
};

//Se crean los objetos de Persona:
let alejandro = new Persona("Alejandro", "Ruiz", 1.7);
let fernanda = new Persona("Fernanda", "Davila", 1.9);

//Se crean los objetos de Desarrollador:
let diego = new Desarrollador("Diego", "Ortiz", 1.84);

//Se llaman los objetos de Persona:
alejandro.saludar();

//Se llama la funcion del prototipo:
diego.saludar();
