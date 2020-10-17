document.addEventListener("click", puntoMouse);
document.addEventListener("mousedown", inicio);
document.addEventListener("mousemove", trazo);
document.addEventListener("mouseup", final);

var lienzo = document.getElementById('canvas');
var papel = lienzo.getContext("2d");
var puntoinicial = false;
var x, y;

function dibujolineas (color, ancho, xinicial, yinicial, xfinal, yfinal)
{
  papel.beginPath();
  papel.strokeStyle = color;
  papel.lineWidth = ancho;
  papel.moveTo(xinicial, yinicial);
  papel.lineTo(xfinal, yfinal);
  papel.stroke();
  papel.closePath();
}

function inicio (evento)
{
  x = evento.clientX;
  y = evento.clientY;
  puntoinicial = true;
  }

  function trazo (evento)
  {
    if (puntoinicial == true) {
      xnueva = evento.clientX;
      ynueva = evento.clientY;
    dibujolineas("yellow", 2, x, y, xnueva, ynueva);
    x = xnueva;
    y = ynueva;
  }
  }

  function puntoMouse(evento)
  {
      console.log(evento);
    if (puntoinicial == false) {
      var x = evento.clientX;
      var y = evento.clientY;
          dibujolineas("purple", 2, x, y, x + 2, y);
    }
  }

  function final (evento)
  {
    puntoinicial = false;
  }
