var count = 0;
var c;

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  c = createButton("Target");
  c.position(width/2,height-100);
}

function draw() {
  background(255);

  fill(0);
  noStroke();
  textSize(270);
  textAlign(CENTER);
  text(count,width/2,height/2+100);
}

function mouseReleased() {
  count+=1;
}