var teclas = { UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39 };

document.addEventListener("keydown", dibujarTeclado);

var cuadrito = document.getElementById("canvas");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;
var movimiento = 1;

dibujolineas("red", x-1, y-1, x+1, y+1, papel);


function dibujolineas (color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  var colorcito = "green";
  console.log(evento);
  switch (evento.keyCode) {
    case teclas.DOWN:
    dibujolineas("colorcito", x, y, x, y + movimiento, papel);
      y = y + movimiento;
      break;
      case teclas.UP:
      dibujolineas("colorcito", x, y, x, y - movimiento, papel);
      y = y - movimiento;
      break;
      case teclas.LEFT:
      dibujolineas("colorcito", x, y, x - movimiento, y , papel);
      x = x - movimiento;
      break;
      case teclas.RIGHT:
      dibujolineas("colorcito", x, y, x + movimiento, y , papel);
      x = x + movimiento;
      break;
    default:
    console.log("Otra tecla");
  }
}
