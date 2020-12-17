class obstacle {
  constructor(){
    this.pos = createVector(width, height-10);
    this.vel = createVector(-0.25, 0);
    this.acc = createVector(0,0);
  }
  
  show(){
    fill(random(255),random(255),random(255));
    rect(this.pos.x,this.pos.y, 100,100)
  }
  
  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }
}
