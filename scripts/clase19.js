// Clases | Prototipos

//Escribir en el HTML
function escribirHtml(escribir) {
  document.getElementById("paragraph").innerHTML += `${escribir}<br>`;
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

let alejandro = new Persona("Alejandro", "Ruiz", 1.7);
let fernanda = new Persona("Fernanda", "Davila", 1.9);

alejandro.saludar();
escribirHtml(alejandro.soyAlto());
fernanda.saludar();
escribirHtml(fernanda.soyAlto());
