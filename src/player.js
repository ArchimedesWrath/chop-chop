class Player {

  constructor(size, x, y) {
    this.size = size;
    this.pos = createVector(x, y);
    this.vel = createVector(2.5, 0);
  }

  update() {
    if(mouseX < player.pos.x) 
      this.pos.sub(this.vel);
    if (mouseX > player.pos.x) 
      this.pos.add(this.vel);
    
    if(this.hitLeft()) 
      this.pos.x = this.size/2;
    if(this.hitRight()) 
      this.pos.x = width - this.size/2;
  }

  render() {
    rectMode(CENTER);
    stroke(210, 83, 112);
    strokeWeight(2);
    fill(239, 100, 132);
    rect(this.pos.x, this.pos.y, this.size, this.size);
  }

  hitLeft() {
    if(player.pos.x <= this.size/2) return true;  
    else return false;
  }

  hitRight() {
    if(player.pos.x >= width - this.size/2) return true;
    else return false;
  }
}