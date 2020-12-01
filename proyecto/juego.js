//JavaScript del juego:

// 0. Se crean variables o constantes para traer
// los elementos del html.
// Se definen los botones del juego:

const celeste = document.getElementById("celeste");
const violeta = document.getElementById("violeta");
const naranja = document.getElementById("naranja");
const verde = document.getElementById("verde");
const BTN_EMPEZAR = document.getElementById("btnEmpezar");
const ULTIMO_NIVEL = 2;

// 1.Definir el constructor:

//Se confirma el funcionamiento de la herramienta.
//swal("Hola");

class Juego {
  constructor() {
    //Funcion que inicializa el juego.
    this.inicializar = this.inicializar.bind(this);
    this.inicializar();
    //Funcion que genera la secuencia del juego.
    this.generarSecuencia();
    //Se crea el nuevo nivel. Se agrega un timeout para que demore un poco en iniciar
    //luego de presionar el boton de inicio.
    setTimeout(this.siguienteNivel, 500);
  }
  inicializar() {
    //Se indica para que this no sea window:
    this.siguienteNivel = this.siguienteNivel.bind(this);
    //Se origaniza el this para evitar confuciones en la seleccion del color.
    this.elegirColor = this.elegirColor.bind(this);
    //Le agrega una clase CSS al elemento. Esta definida y lo
    //que hace es hacer un display none. Se configura un boton tipo toggle.
    this.toggleBtnEmpezar();
    //Se crea el sistema de niveles:
    this.nivel = 1;
    //Se crea un objeto con los colores que se van a utilizar:
    this.colores = {
      celeste,
      violeta,
      naranja,
      verde,
    };
  }

  toggleBtnEmpezar() {
    if (BTN_EMPEZAR.classList.contains("hide")) {
      BTN_EMPEZAR.classList.remove("hide");
    } else {
      BTN_EMPEZAR.classList.add("hide");
    }
  }

  generarSecuencia() {
    /* Se genera una secuencia creando un nuevo Array usando
      la palabra reservada new. Se seleccionan 10 elementos.
      Se utiliza el metodo .fill para rellenar de ceros. Se llenan
      con .map usando un arrayfunction para rellenar con un random que va de 0 a 3
      se aproxima usando el .floor.
      */
    this.secuencia = new Array(ULTIMO_NIVEL)
      .fill(0)
      .map((n) => Math.floor(Math.random() * 4));
    //RECORDAR QUE MATH.RANDOM() SIEMPRE LLEVA PARENTESIS. Ya es la segunda vez que me pasa.
  }

  siguienteNivel() {
    //Se crea un subnivel que se ira incrementando:
    this.subnivel = 0;
    this.iluminarSecuencia();
    //Agregar evento de clic:
    this.agregarEventosClick();
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
  transformarColorANumero(color) {
    //No es necesario poner un break ya que esta directamente el return.
    switch (color) {
      case "celeste":
        return 0;
      case "violeta":
        return 1;
      case "naranja":
        return 2;
      case "verde":
        return 3;
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

  agregarEventosClick() {
    this.colores.celeste.addEventListener("click", this.elegirColor);
    this.colores.verde.addEventListener("click", this.elegirColor);
    this.colores.violeta.addEventListener("click", this.elegirColor);
    this.colores.naranja.addEventListener("click", this.elegirColor);
  }

  eleminarEventosClick() {
    this.colores.celeste.removeEventListener("click", this.elegirColor);
    this.colores.verde.removeEventListener("click", this.elegirColor);
    this.colores.violeta.removeEventListener("click", this.elegirColor);
    this.colores.naranja.removeEventListener("click", this.elegirColor);
  }

  elegirColor(ev) {
    const nombreColor = ev.target.dataset.color;
    const numeroColor = this.transformarColorANumero(nombreColor);
    this.iluminarColor(nombreColor);
    if (numeroColor === this.secuencia[this.subnivel]) {
      this.subnivel++;
      if (this.subnivel === this.nivel) {
        this.nivel++;
        this.eleminarEventosClick();
        if (this.nivel === ULTIMO_NIVEL + 1) {
          this.ganoElJuego();
        } else {
          setTimeout(this.siguienteNivel, 1500);
        }
      }
    } else {
      this.perdioElJuego();
    }
  }

  ganoElJuego() {
    swal("Platzi", "Felicitaciones ¡Ganaste! el juego.", "success").then(() => {
      this.inicializar();
    });
  }

  perdioElJuego() {
    swal("Platzi", "Lo siento, perdiste... Vuelve a intentar.", "error").then(
      () => {
        this.eleminarEventosClick();
        this.inicializar();
      }
    );
  }
}

// Se inicia el juego cuando dan clic en el boton:
function empezarJuego() {
  window.juego = new Juego();
}
