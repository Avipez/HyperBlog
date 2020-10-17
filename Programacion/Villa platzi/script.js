var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
  url: "mapa.png",
  cargaOk: false
}

fondo.imagen = new Image;
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarDibujos);

var vaca = {
  url: "vaca.png",
  cargaOk: false
}

vaca.imagen = new Image;
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargaVaca);

var cerdo = {
  url: "cerdo.png",
  cargaOk: false
}

cerdo.imagen = new Image;
cerdo.imagen.src = cerdo.url
cerdo.imagen.addEventListener("load", cargaCerdo);

var pollo = {
  url: "pollo.png",
  cargaOk: false
}

pollo.imagen = new Image;
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargaPollo);

function cargarDibujos()
{
  fondo.cargaOk = true;
  dibujar();
}
function cargaVaca()
{
  vaca.cargaOk = true;
  dibujar();
}
function cargaCerdo()
{
  cerdo.cargaOk = true;
  dibujar();
}
function cargaPollo()
{
  pollo.cargaOk = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOk);
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOk);
  {
    for (var i = 0; i < cantidad ; i++)
    {
      var x = aleatorio (0, 420);
      var y = aleatorio (0, 420);
      papel.drawImage(vaca.imagen, x, y);
    }
    if(cerdo.cargaOk);
    {
      for (var i = 0; i < cantidad ; i++)
      {
        var x = aleatorio (0, 420);
        var y = aleatorio (0, 420);
        papel.drawImage(cerdo.imagen, x, y);
      }
      if(pollo.cargaOk);
      {
        for (var i = 0; i < cantidad ; i++)
        {
          var x = aleatorio (0, 420);
          var y = aleatorio (0, 420);
          papel.drawImage(pollo.imagen, x, y);
        }
      }
function aleatorio (min, max)
{
  var resultado;
  resultado = Math.floor(Math.random()*(max-min))+min;
  return resultado;
}
