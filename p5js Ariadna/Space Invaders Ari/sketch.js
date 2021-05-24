var x=200;
var y=160;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,0,0);
  
fill(RGB);
noStroke();

rect(x,y,10,10);
rect(x+10,y,10,10);
rect(x,y+10,10,10);
rect(x+10,y+10,10,10);
rect(x-10,y+10,10,10);
rect(x+20,y+10,10,10);
rect(x,y+20,10,10);
rect(x-10,y+20,10,10);
rect(x-20,y+20,10,10);
rect(x+10,y+20,10,10);
rect(x+20,y+20,10,10);
rect(x+30,y+20,10,10);
rect(x,y+30,10,10);
rect(x-20,y+30,10,10);
rect(x-30,y+30,10,10);
rect(x+10,y+30,10,10);
rect(x+30,y+30,10,10);
rect(x+40,y+30,10,10);
rect(x,y+40,10,10);
rect(x-10,y+40,10,10);
rect(x-20,y+40,10,10);
rect(x-30,y+40,10,10);
rect(x+10,y+40,10,10);
rect(x+20, y+40,10,10);
rect(x+30,y+40,10,10);
rect(x+40,y+40,10,10);
rect(x-10,y+50,10,10);
rect(x+20,y+50,10,10);
rect(x,y+60,10,10);
rect(x+10,y+60,10,10);
rect(x-20,y+60,10,10);
rect(x+30,y+60,10,10);
rect(x-10,y+70,10,10);
rect(x+20,y+70,10,10);
rect(x+40,y+70,10,10);
rect(x-30,y+70,10,10);
  
if (mouseIsPressed){
  rgb = color(random(255), random(255), random(255))
}
  
function keyPressed(){
  if (keyCode=== RIGHT_ARROW) 
    x=x+20
  
  if (keyCode=== UP_ARROW) 
    y=y-20
  
  if (keyCode=== LEFT_ARROW) 
    x=x-20  
  if (keyCode=== DOWN_ARROW) 
    y=y+20
}

  if (x-30 < 0){
    x=30;
  }
  if (x+40 > 400){
    x=350;
  }
  if (y+80 > 400){
    y=310;
  }
  if(y < 0){
    y=0;
  }


}