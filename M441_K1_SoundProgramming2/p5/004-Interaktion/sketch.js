/*
Übung:
- Wie kann man auf Eingabe Events reagieren
  - Maus / Keyboard
  
  - Was passiert wenn man den Funktionsaufruf -> background(255); aus der draw Funktion auskommentiert
  - Übung: Implementiere die Funktion KeyTyped -> https://p5js.org/reference/#/p5/keyTyped
      ->  Bei gedrückter Keyboardtaste soll sich folgendes Verhalten ändern
         - b = Kreisfüllfarbe = blau
         - g = Kreisfüllfarbe = grün
         - r = Kreisfüllfarbe = soll sich zufällig ändern – nutze die random Funktion -> https://p5js.org/reference/#/p5/random
         - s = speichere das gezeichnete Bild
  
*/

var fill_color;
var circle_size;
var playing = false;

function setup() {
  createCanvas(600, 300);
  fill_color = color(255, 255, 255);
  background(255);
  circle_size = 50;

}

function draw() {

  //background(255); // reset Background to white
  if (mouseIsPressed == true) {
    fill_color = color(0, 255, 0);
    stroke(1); // stroke = Farbe der Kreiskontur 
    fill(fill_color); // fill = Farbe der Form 
    ellipse(mouseX, mouseY, circle_size, circle_size);
  }
}