// Estructura switch

let signo = prompt("¿Cúal es tu signo?");

//Escribir HTML
const escribirHtml = (texto) =>
  (document.getElementById("paragraph").innerHTML += texto);

switch (signo) {
  case "acuario":
    escribirHtml(
      "La diferencia entre alabanza y adulación, nativa de Acuario, radica en que lo primero es verdad y lo segundo dista mucho de serlo. Tenlo en cuenta cuando cierta persona de tu entorno venga hoy a enjabonar tu ego refiriéndose a una cualidad que tú sabes que no posees. Te lo dice por su propio interés, para conseguir algo. Huye a diario de estas personas porque son las que si no tienes nada que ofrecerles ni te miran a la cara. Hoy te puedes cruzar con alguien que lleva ya tiempo haciéndose el encontradizo a diario. Dile que tienes prisa y no pierdas ni medio minuto de tu tiempo, instintiva Acuario. En el amor, si no has dicho toda la verdad a tu pareja porque sabes que podría herirle, busca la mejor forma de explicarle lo que callas porque la mentira tiene las patas muy cortas."
    );
    break;
  case "piscis":
    escribirHtml(
      "Sabes cómo adaptarte rápidamente a cualquier situación y a todas las circunstancias que a diario te pone la vida por delante, inteligente Piscis, sin embargo hoy parece que te resistes a aceptar cierta realidad y estás oponiéndote a ello. Es mejor que dejes que todo siga su propio cauce y que tú también te dejes fluir. Quizá hoy tengas que renunciar a un plan o una compra que te hacía especial ilusión, pero en estos momentos no puedes darte este capricho. Se trata sólo de esperar un poco, este bache económico pasará pronto. En el terreno sentimental, si eres de las Piscis con pareja, recuerda que de vez en cuando unas palabras de alabanza son muy alentadoras. Hazle hoy un cumplido sincero a tu chico porque está pensando que no le ves ninguna gracia y a diario se plantea qué está haciendo a tu lado."
    );
    break;
  case "cancer":
    escribirHtml("No hay información de cancer.");
    break;
  case "escorpio":
    escribirHtml("Este no tiene mucha información.");
    break;
  default:
    escribirHtml("No se tiene información. Consulte mañana.");
    break;
}
