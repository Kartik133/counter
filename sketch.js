var count = 0;
var reset,target,wT,t;
var gameState = "start";
var c = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);

  t = createButton("WITH TARGET");
  t.position(width/2-500,height/2-35);
  t.style("background","orange");
  t.style("font-size","50px");

  wT = createButton("WITHOUT TARGET");
  wT.position(width/2+100,height/2-35);
  wT.style("background","orange");
  wT.style("font-size","50px");
  
  reset = createButton("RESET");
  reset.position(width/2-80,height-100);
  reset.style("background","orange");
  reset.style("font-size","50px");

  target = createButton("TARGET");
  target.position(width/2-80,height-100);
  target.style("background","orange");
  target.style("font-size","50px");
}

function draw() {
  background(255);

  if(gameState==="start") {
    reset.hide();
    target.hide();
    t.show();
    wT.show();

    wT.mouseReleased(()=>{
      gameState = "wT";
      count = 0;
    });

    t.mouseReleased(()=>{
      gameState = "t";
      count = 0;
    });
  }

  if(gameState==="wT") {
    reset.show();
    target.hide();
    c++;
  }

  if(gameState==="t") {
    reset.show();
    target.show();
    c++;
  }

  if(gameState!=="start") {
   fill(0);
   noStroke();
   textSize(270);
   textAlign(CENTER);
   text(count,width/2,height/2+100);

   
   t.hide();
   wT.hide();
  }

  reset.mousePressed(()=>{
    count = 0;
  })
}

function mouseReleased() {
   if((mouseY < height-100 || mouseX < width/2-80 || mouseX > width/2+80 || mouseY > height-30) && gameState==="wT" && c>10) {
    count+=1;
   }

   if((mouseY < height-100 || mouseX < width/2-80 || mouseX > width/2+80 || mouseY > height-30) && gameState==="t" && c>10) {
    count+=1;
   }
}