
/* 
Studiere die nachfolgenden Codezeilen 

Übung:
- Erstelle einen dunkelgrünen Hintergrund
- Zeichne ein Rechteck der größe 200 x 200 Px in Gelb
*/

function setup() {
  //erstellt ein Fenster welches für die Darstellung benutzt wird
  // windowWidth, windowHeight = benutzt die Browserfenstergröße
  createCanvas(400, 400);

}

function draw() {

  //Farben:
  /*Standardmässig interprätiert p5.js Farben nach dem RGB-Farbmodel.
  - Ressource: http://www.informatikzentrale.de/rgb-farbmodell.html
  - Die Farbwerte können verändert werden mit den Werten zwischen 0 und 255
  - Benutzt man nur einen Wert Ist die Farbe ein Grauwert
  - Benutzt man 3 Werte können in dieser Kombination 16,7 Mio Farben erzeugt werden
  WEB Farbcode -> http://html-color-codes.info/webfarben_hexcodes/
  background(255) = Hintergrundfarbe = Weiß
  stroke(0) = Linienfarbe = schwarz
  fill(127) = Füllfarbe = grau 
  var red = color(255,0,0);
  var green = color(0,255,0);
  var blue = color(0,0,255);
  */
  background(17,55,3);
  stroke(0); // stroke = Farbe der Kreiskontur 
  fill(255,255,0); // fill = Farbe der Form 
  rect(width/2 - 25, height/2 - 25, 50, 50);
}

