

var groesse = 100; //initialisiert die Größe des Rechtecks (100x100 Pixel) 
/*
direction – repräsentiert die Richtung in welche sich das Rechteck bewegt
1 = Rechteck wird größer
-1 = Rechteck wird kleiner
*/
var direction = 1; 

//setup Funktion wird nur bei Programmstart einmal Aufgerufen
// dient zur Initialisierung
function setup() {
  //createCanvas – Funktion – https://p5js.org/reference/#/p5/createCanvas
  //erstellt einen Bereich mit der Breite 600 und der Höhe 400. 
  //in diesen Bereich kann man zeichnen. 
  createCanvas(600, 400);
}

/*
draw Funktion:
Diese Funktion wird nach der setup() Funktion aufgerufen und wird dauerhaft getriggert 
solange das Programm aktiv ist. Bei 60 Frames pro Sekunde wird diese Funktion 60 mal aufgerufen.
*/
function draw() {
  // background – setzt die Hintergrundfarbe auf grau (farbraum geht von 0 - 255)
  background(127);
  // fill – wählt die Vordergrundfarbe aus
  fill(255);
  
  //Durch die Berechnung des Zentrums wird das Rechteck immer mittig des Canvas gezeichnet
  var center_x = width/2 - ( groesse / 2);
  var center_y = height/2 - ( groesse / 2);
  
  /* 
  rect – zeichnet ein Rechteck rect(x_Koordinate, y_Koordinate, Breite, Höhe)
  x_Koordinate und y_Koordinate repräsentieren die Linke obere Ecke.
  */
  rect(center_x,center_y,groesse,groesse);
  
  /*Nach jeder Iteration wird das Rechteck um einen Pixel 
  größer oder kleiner je nachdem, welchen Wert direction hat (1 oder -1). 
  */
  groesse = groesse + direction;
  
  //Fallunterscheidung
  /*
  Wenn die Größe > 400 ist oder die Größe < 0 ist, dann verändere die Richtung 
  (repräsentiert durch die Variable direction)
  Durch die Multiplikation mit *-1 wird der Wert invertiert.
  */
  if (groesse > 400 || groesse < 100){
    direction = direction * -1;
  }

}