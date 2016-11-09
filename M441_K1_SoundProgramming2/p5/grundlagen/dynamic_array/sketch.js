
var xKoords = null;
var yKoords = null;

function setup() {
  createCanvas(500, 200);
  background(0);
  fill(255);
  
  //initialize empty Array
  xKoords = new Array();
  yKoords = new Array();

  x = 0;
  y = 0;
  
  for(var i = 0; i < 50; i++){
    //add elements to the list
    xKoords.push(x); 
    yKoords.push(y);
    
    x += 10;
    y += 4;
  } 
  
  fill(255);
  
  // draw circles at specific coordinates
  for(var i = 0; i < xKoords.length; i++){
    ellipse(xKoords[i], yKoords[i], 10,10)
  }
  
  console.log("content of xKoors =" + xKoords.length);
  
}

function draw() {
  
}
/*
function mousePressed() {

  background(0);
  fill(255);

  for (var i = 0; i < 200; i++) {
    ellipse(random(width), random(height), 10, 10);
  }
}
*/