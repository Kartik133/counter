var count = 0;
var reset,target,plus,minus,set,cancel;
var input;
var gameState = "start";
var c = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);

  input = createInput("0",'number');
  input.position(width/2-250,height/2-35);
  input.style("background","lavender");
  input.style("font-size","50px");

  cancel = createButton("Cancel");
  //cancel.position(width/2-500,height/2-35);
  cancel.style("background","lavender");
  cancel.style("font-size","50px");

  minus = createButton("-");
  minus.position(width/2-35,height/2+400);
  minus.style("background","lavender");
  minus.style("width","47.5px");
  minus.style("font-size","100px");

  set = createButton("set");
  set.position(width/2-500,height/2-35);
  set.style("background","lavender");
  set.style("font-size","50px");

  plus = createButton("+");
  plus.position(width/2-35,height/2+300);
  plus.style("background","lavender");
  plus.style("font-size","100px");
  
  reset = createButton("Reset");
  reset.position(width/2-80,height/2);
  reset.style("background","orange");
  reset.style("font-size","50px");

  target = createButton("Target");
  target.position(width/2-85,height-100);
  target.style("background","orange");
  target.style("font-size","50px");
}

function draw() {
  background(255);

  if(gameState==="start") {
   fill(0);
   noStroke();
   textSize(270);
   textAlign(CENTER);
   //text(count,width/2,height/2+100);

   set.hide();
   input.hide();
   plus.show();
   minus.show();
   target.show();

   if(count!==0) {
     reset.show();
   }else{
      reset.hide();
    }

   cancel.position(width-200,height-100);
   
   if(input.value()>0) {
     cancel.show();
     if(count<input.value()) {
       fill(0);
     }

     if(count==input.value()) {
       fill(0,255,0);
     }

     if(count>input.value()) {
       fill(255,0,0);
     }
    
     text(count+"/"+input.value(),width/2-10,height/2-50);
   }else{
       cancel.hide();
       fill(0);
       text(count,width/2-10,height/2-50);
    }

   cancel.mouseReleased(()=>{
     input.value(0);
     count = 0;
   });
   

   plus.mouseReleased(()=>{
     count+=1;
   });

   minus.mouseReleased(()=>{
     if(count!==0) {
      count-=1;
     }
   });
  

   reset.mousePressed(()=>{
     count = 0;
   });

   target.mousePressed(()=>{
     gameState = "set";
   });
  }

  if(gameState==="set") {
    set.show();
    input.show();
    reset.hide();
    target.hide();
    minus.hide();
    plus.hide();
    cancel.show();

    set.mouseReleased(()=>{
     if(input.value()>0) {
       gameState = "start";
       count = 0;
     }
    });

    cancel.position(width/2-60,height/2+70);
    set.position(width/2-20,height/2+150);

    cancel.mouseReleased(()=>{
     input.value(0);
     count = 0;
     gameState = "start";
    });
  }
}