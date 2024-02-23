

function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(220);
 
  drawPanda(0, 0);
}

function drawPanda(){
  //creature 
  push();
   
     translate(200, 200);
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
