var texto = document.getElementById("texto_lineas")
var boton = document.getElementById("botoncito")

boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

function dibujoPorClick()
{
  var lineas = (parseInt(texto.value)+1;
  var l = 0;
  var yi, xf;
  var xi, yf;
  var espacio = ancho/lineas;

  for (l = 0; l < lineas; l ++)
  {
    yi = espacio * l;
    xf = espacio * l;
    xi = l * espacio;
    yf = l * espacio;
    dibujolineas("orange", 1, yi, xf, 299);
    dibujolineas("purple",xi, 1, 299, yf );
    console.log("lineas" + 1);
  }
}


function dibujolineas (color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
