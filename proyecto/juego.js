//JavaScript del juego:

// 0. Se crean variables o constantes para traer
// los elementos del html.
// Se definen los botones del juego:

const CELESTE = document.getElementById("celeste");
const VIOLETA = document.getElementById("violeta");
const NARANJA = document.getElementById("naranja");
const VERDE = document.getElementById("verde");
const BTN_EMPEZAR = document.getElementById("btnEmpezar");

// 1.Definir el constructor:

class Juego {
  constructor() {
    //Funcion que inicializa el juego.
    this.inicializar();
    //Funcion que genera la secuencia del juego.
    this.generarSecuencia();
    //Se crea el nuevo nivel:
    this.siguienteNivel();
  }
  inicializar() {
    //Le agrega una clase CSS al elemento. Esta definida y lo
    //que hace es hacer un display none.
    BTN_EMPEZAR.classList.add("hide");
    //Se crea el sistema de niveles:
    this.nivel = 1;
    //Se crea un objeto con los colores que se van a utilizar:
    this.colores = {
      celeste: CELESTE,
      violeta: VIOLETA,
      naranja: NARANJA,
      verde: VERDE,
    };
  }

  generarSecuencia() {
    /* Se genera una secuencia creando un nuevo Array usando
      la palabra reservada new. Se seleccionan 10 elementos.
      Se utiliza el metodo .fill para rellenar de ceros. Se llenan
      con .map usando un arrayfunction para rellenar con un random que va de 0 a 3
      se aproxima usando el .floor.
      */
    this.secuencia = new Array(10)
      .fill(0)
      .map((n) => Math.floor(Math.random() * 4));
    //RECORDAR QUE MATH.RANDOM() SIEMPRE LLEVA PARENTESIS. Ya es la segunda vez que me pasa.
  }

  siguienteNivel() {
    this.iluminarSecuencia();
  }

  transformarNumeroAColor(numero) {
    //No es necesario poner un break ya que esta directamente el return.
    switch (numero) {
      case 0:
        return "celeste";
      case 1:
        return "violeta";
      case 2:
        return "naranja";
      case 3:
        return "verde";
    }
  }

  iluminarSecuencia() {
    for (let i = 0; i < this.nivel; i++) {
      const color = this.transformarNumeroAColor(this.secuencia[i]);
      //Se crea una funcion para iluminar el color que le vamos a pasar:
      setTimeout(() => this.iluminarColor(color), 1000 * i);
    }
  }

  iluminarColor(color) {
    this.colores[color].classList.add("light");
    setTimeout(() => this.apagarColor(color), 350);
  }

  apagarColor(color) {
    this.colores[color].classList.remove("light");
  }
}

// Se inicia el juego cuando dan clic en el boton:
function empezarJuego() {
  let juego = new Juego();
}
