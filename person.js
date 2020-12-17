// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces

function Person() {
  this.pos = createVector(150, height-10);
  this.vel = createVector(0.25, 0);
  this.acc = createVector(0,0);

  this.applyForce = function(force) {
    var f = force.copy();
    f.div(10);
    this.acc.add(f);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  this.display = function() {
    fill(255,10,10);
    stroke(255);
    rect(this.pos.x, this.pos.y-100, 50, 50);
  }

  this.edges = function() {
    if (this.pos.y > height+20) {
      this.vel.y *= -0;
      this.pos.y = height+20;
    }

    // if (this.pos.x > width) {
    //   this.vel.x *= -1;
    //   this.pos.x = width;
    // }
  }
}
