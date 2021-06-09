var count = 0;
var sprite;
var count2 = 0;

function setup() {
   sprite = createSprite(0,0,0,0);
   sprite.visible = false;
}

function draw() {
  createCanvas(windowWidth,windowHeight);

  sprite.x = width/2;
  sprite.y = height/2;
  sprite.width = width;
  sprite.height = height;

  if(mousePressedOver(sprite)){
      count+=1;
      background(255,255,0);
      if(count===1) {
        count2+=1;
      }
  }else{
     background(255);
     count = 0;
   }
  
  fill(0);
  noStroke();
  textSize(30);
  text(count2,width/2,height/2);

  drawSprites();
}