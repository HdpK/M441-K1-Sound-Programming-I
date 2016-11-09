

function Point(x,y){
  this.x = x;
  this.y = y;
}

var koordinaten = [new Point(100,100),new Point(200,100),new Point(300,100),new Point(400,100)];


function setup() {
  createCanvas(500,200);
  background(255);
  fill(0)
  for(var i = 0; i < koordinaten.length; i++){
    ellipse(koordinaten[i].x,koordinaten[i].y, 20, 20);
  }
}

function draw() {
  
}