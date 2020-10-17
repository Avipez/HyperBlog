var imagenes = [];
imagenes["cauchin"] = "vaca.png";
imagenes["pokacho"] = "pollo.png";
imagenes["tocinauro"] = "cerdo.png";

 class Pakimon
 {
   constructor(n, v, a)
   {
     this.imagen = new Image();
     this.nombre = n;
     this.vida = v;
     this.ataque = a;

     this.imagen.src = imagenes[this.nombre];
   }
   hablar()
   {
     alert(this.nombre);
   }
   mostrar()
   {
     document.body.appendChild(this.imagen);
     document.write("<br> <strong>" + this.nombre + "</strong><br>");
     document.write("ataque: " + this.ataque + "<br>");
     document.write("vida: " + this.vida + "<hr>");
   }
 }

 var cauchin = new Pakimon("cauchin", 100, 40);
 var pokacho = new Pakimon("pokacho", 80, 60);
 var tocinauro = new Pakimon("tocinauro", 120, 40);

cauchin.mostrar();
pokacho.mostrar();
tocinauro.mostrar();
