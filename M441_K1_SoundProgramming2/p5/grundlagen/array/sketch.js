/*
Zeichne die Kreise mit einer for Schleife
*/


var xKoordinaten = [100,200,300,400];
var yKoordinaten = [100,100,100,100];


function setup() {
  createCanvas(500,200);
  background(255);
  ellipse(xKoordinaten[0],yKoordinaten[0], 20, 20);
  ellipse(xKoordinaten[1],yKoordinaten[1], 20, 20);
  ellipse(xKoordinaten[2],yKoordinaten[2], 20, 20);
  ellipse(xKoordinaten[3],yKoordinaten[3], 20, 20);
}

function draw() {
  
}