
function setup() {
  createCanvas(600,600);
  background(0);
}

function draw() {
  
}

function mousePressed(){
  
  background(0);
  fill(255);
  for(var i = 0; i < 4; i++){
    ellipse(random(width), random(height), 10,10);
  }
}
