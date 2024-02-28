
let img;
let y = 0;
let s = 0.8;
let foxX;
let foxY;
let foxS;

function preload() {
  img = loadImage('assets/martyplain.png')
}

function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
  //y = 0;
  //s = 0;
}

function draw() {
  background(220);
 
  drawBackground();
 
  drawPanda(130, y, 0.5);
  y++;

  drawTurtle(100, 370, 0.1);

  drawFoxy(395, 375, 0.2);

  drawMarty(300, 230, s);

 if (y >= 250 && y <= 253) {

    s++; 
 } 
}

function drawPanda(x, y, s){
  //creature 
  push();
   
     translate(x, y);
     scale(s);
     
 // nose
   fill(100);
   stroke(0);
 arc(-155, 85, 25, 25, PI/2, 3*PI/2, PIE);
 // little ear
 arc(-130, 35, 35, 35, PI/2, 0, PIE);
 // head
   fill(250);
 ellipse(-90, 90, 130);
 // big ear
   fill(100);
 ellipse(-65, 30, 55);
 // eye
 arc(-115, 80, 35, 35, PI, 0, PIE);
 // left foot
 arc(50, 162, 50, 50, PI, 0, PIE);
 //body
   fill(250);
 rect(-25, 25, 50, 125);
 ellipse(75, 67, 100, 175);
 //tail
   fill(100);
 arc(100, 0, 50, 50, 5*PI/4, PI/4);
 //leg
 triangle(125, 175, 125, 95, 100, 150);
 // right foot
 arc(100, 175, 50, 50, PI, 0, PIE);
 

  pop();
}

function drawBackground(){

  fill(180, 240, 250);
    noStroke();
    rect(0, 0, 400, 330);
  
  fill(80, 180, 90);
    noStroke();
    rect(0, 330, 400, 100);
}

function drawMarty(x, y, s) {
  push();
  translate(x, y);

  scale(s);


  image(img, -151, -156);

  pop();
}

function drawTurtle(x, y, s){
  push();
  translate(x,y);
  scale(s);
     //legs
     fill('#398D1A ')
     stroke('#C7DE50')
     ellipse(55,-45,90,30) 
      ellipse(-55,-45,90,30)
       ellipse(55,35,90,30)
       ellipse(-60,35,90,30)
       
       //head
       stroke('#C7DE50')
       ellipse(0,-110,75,75)
       
       //eyes
       fill('white')
       noStroke('0')
         ellipse(15,-117,15,15)
         ellipse(-15,-117,15,15)
     
       
       fill('black')
       ellipse(-15,-120,8,7)
       ellipse(15,-120,8,7)
       
        //body
        fill('#398D1A ')
       stroke('#C7DE50')
       ellipse(0,0,150,200)
       
       //body pattern
       fill('#24612C ')
       ellipse(0,0,130,180)
       noStroke('0')
         fill('#2A6C32 ')
       quad(0,60,60,0,0,-60,-60,0)
       fill('#23732D ')
     noStroke(0)
        quad(0,30,30,0,0,-30,-30,0)
       
        //smile
       stroke('black')
       noFill('0')
       arc(0,-137,8,5,180,0)
       
       //eyebrows
       stroke('black')
       noFill('0')
       arc(15,-108,10,5,0,PI)
       arc(-15,-108,10,5,0,PI)
       
         pop()
     }

function drawFoxy(foxX, foxY, foxS) {
push();
translate(foxX, foxY);  
scale(foxS);

fill("rgb(219,143,3)");

// arms
push();
rotate(PI/4);
ellipse(-40, 30, 15, 140);
pop();

push();
rotate(7*PI/4);
ellipse(40, 30, 15, 140);
pop();

// tail
push();
rotate(PI/4);
ellipse(20, 60, 30, 120);
fill("white");
arc(19, 100, 26, 40, 0, PI + PI/5, PIE);
pop();

// legs and body
rect(-30, 50, 15, 160);
rect(15, 50, 15, 160);
rect(-35, -60, 70, 140, 30);

// belly
fill("rgba(255,228,179,0.81)");
rect(-25, -40, 50, 100, 30);

fill("rgb(219,143,3)");

// ears
triangle(-32, -100, -10, -118, -35, -125);
triangle(32, -100, 10, -118, 35, -125);

// nose
triangle(-20, -80, 20, -80, 0, -60);
fill("black");
ellipse(0, -60, 7);

// head shape
noStroke();
fill("rgb(219,143,3)");
ellipse(0, -100, 65, 55);

// eyes
fill("white");
ellipse(-15, -95, 9);
ellipse(15, -95, 9);
fill("black");
ellipse(-15, -95, 6);
ellipse(15, -95, 6);

// whiskers
stroke("black");
line(-30, -75, -5, -65);
line(30, -75, 5, -65);
line(-33, -60, -5, -62);
line(33, -60, 5, -62);

pop();

if (foxY <= 250) {
  foxY = foxY + 5;
}
}
