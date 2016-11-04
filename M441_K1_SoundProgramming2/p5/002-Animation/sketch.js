
/*
Übung:
 - Verändere den Code so, daß sich der Kreis von links nach rechts bewegt.
 - Die Größe des Kreises soll sich nicht ändern.
 - Nutze hierzu die derzeit noch unbenutzte Variable pos_x.
 - Wenn der Kreis rechts angekommen ist soll er wieder von links nach rechts wandern

*/

var circle_size = 30;
var pos_x = 0;
var circle_color = 0;

function setup() {
  createCanvas(480, 480);
  
}

function draw() {
  //zeichnet einen Kreis in der Mitte des Fensters
  //ellipse(Position_X, Position_Y, Breite, Höhe)
  
  background(255,0,0); 
  stroke(0); // stroke = Farbe der Kreiskontur 
  fill(circle_color); // fill = Farbe der Form 
  ellipse(pos_x, height/2, circle_size, circle_size);
  
  //circle_size = circle_size + 1;
  pos_x += 1;
  pos_x = pos_x +1;
  
  circle_color = pos_x * (255/480);
  
  console.log(pos_x);

  if(pos_x >=width){
    pos_x = 0;
  }
  
}


