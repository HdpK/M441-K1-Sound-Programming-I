/*
  - Übung Theremin:
    osc = new p5.Oscillator();
    osc.setType('sine');
    osc.freq(240);
    osc.amp(0);
    osc.start();
    - verändere den Patch sodass bei gedrückter Maustaste ein Oszillator erklingt 
    - Die X-Achse soll die Frequenz verändern
    - Die Y-Achse soll die Amplitude verändern
   
    ->  Bei gedrückter Keyboardtaste soll sich folgendes Verhalten ändern
     - t = ändert die Wellenform des Oszillators zu triangle
     - s = ändert die Wellenform des Oszillators zu sinus
     - w = ändert die Wellenform des Oszillators zu sawtooth
    
    -> Nutze die Map Funktion um Eigenschaften des Oszillators zu ändern
     - Die Frequenz des Oszillators soll von 0 - 2000 Hz gehen
     - Die Amplitude am unteren Bildschirmrand soll 0 betragen, am oberen Bildschirmrand soll die Amplitude 1 betragen
   
*/


var fill_color;
var circle_size;
var playing = false;

function setup() {
  createCanvas(600, 300);
  fill_color = color(255, 255, 255);
  background(255);
  circle_size = 50;

  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(240);
  osc.amp(0);
  osc.start();
}

function draw() {

  background(255); // reset Background to white
  if (mouseIsPressed == true) {
    fill_color = color(0, 255, 0);
    stroke(1); // stroke = Farbe der Kreiskontur 
    fill(fill_color); // fill = Farbe der Form 
    ellipse(mouseX, mouseY, circle_size, circle_size);
    
    var amplitude = map(mouseY ,0 , height, 1, 0);
    var frequency = map(mouseX, 0, width, 0, 2000);
    osc.amp(amplitude,0.1);
    osc.freq(frequency,0.1);
  }else{
    osc.amp(0,0.1);
  }
}