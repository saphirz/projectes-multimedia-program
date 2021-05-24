function setup() {
  createCanvas(500, 800);
}


function draw() {
  background(0, 164, 26 );
  
//*cabell

  fill(143, 56, 0 );
rect(100,50,300,500,500);
  
 //*coll 
       fill(255, 221, 200);
rect(220,300,70,50); 
    
       fill(255, 155, 198 );
circle(250,305,70,30); 

  
//*cara
 
     fill(255, 221, 200);
  circle(250,200,250);

  //*boca
  
fill(255, 0, 0);
arc(250, 260, 80, 80, 0, PI + QUARTER_PI, CHORD);

//*ulls
  
fill(0,10,0);
circle(210,180,20);

  
fill(0,10,0);
circle(290,180,20);
  
fill(255,255,255);
circle(212,180,10);

  
fill(255,255,255);
circle(292,180,10);
  
  
  //* galtes
  
  fill(251, 180, 215);
circle(180,220,40);

  
fill(251, 180, 215);
circle(330,220,40);
  

  
//*serrell
  fill(143, 56, 0 );
rect(150,70,200,90,550);
  
//*cos
  
    fill(255, 220, 0 );
rect(110,350,280,500,20);
  
      fill(228, 200, 0  );
rect(170,400,10,500,20);

   fill(228, 200, 0  );
rect(320,400,10,500,20);

  
  //pantalons
  
     fill(16, 19, 145 );
rect(110,750,280,500);

//mans

   fill(255, 221, 200);
  circle(360,720,100);

     fill(255, 221, 200);
  circle(140,720,100);

  
strokeWeight(1);
stroke(237, 34, 93);
beginShape(LINES);
vertex(300,420);
vertex(300,620);
vertex(200,420);
vertex(200,620);
vertex(150,560);
vertex(350,560);
vertex(150,460);
vertex(350,460);
endShape();


  
  //pantalons
  
     fill(16, 19, 145 );
rect(110,750,280,500);

//mans

   fill(255, 221, 200);
  circle(360,720,100);

     fill(255, 221, 200);
  circle(140,720,100);
  
  
  //flor

fill(143, 56, 0 );
arc(200, 50, 10, 10, 10, PI + QUARTER_PI,CHORD);
  rotate(PI/5);
  
  
  fill(5, 255, 234 );
   translate(180, 50);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);
  }
  
 
     fill(255, 155, 198 );
rect(150,23,50,30,500); 
}