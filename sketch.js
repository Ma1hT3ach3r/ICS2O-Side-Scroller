var man;
var bad;

function setup() {
  createCanvas(640, 360);
  man = new Person();
  bad= new obstacle(); 
}
function keyPressed() {
  if (key == ' ') {
    let force = createVector(0, -5);
    man.applyForce(force);
  }
}
function draw() {
  background(51);
  translate(-man.pos.x + 100, 0);
let gravity = createVector(0,0.05)
  man.applyForce(gravity);
  man.update();
  man.display();
  man.edges();
  //Silly hard code or obstacle
  fill(50, 30, 200);
  rect(200, height - 50, 100, 100);
  bad.show();
  bad.update();
  
  
}
