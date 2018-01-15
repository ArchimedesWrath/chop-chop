class Tree {
  constructor(x, y, type) {
    this.pos = createVector(x, y);
    this.type = type;
    this.hits = 5;
  }

  render() {
    this.makeTree();
  }

  makeTree() {  
    if(this.type === 'Pine') {
      rectMode(CENTER);
      stroke(195, 152, 75);
      fill(204, 163, 83);
      rect(this.pos.x, this.pos.y, 25, 40);
      stroke(21, 111, 95);
      fill(21, 150, 105);
      triangle(this.pos.x - 30, this.pos.y - 20, this.pos.x + 30, this.pos.y - 20, this.pos.x, this.pos.y - 250);
    } else if(this.type === 'Maple') {

    }
  }
}