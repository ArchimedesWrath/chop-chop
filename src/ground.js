class Ground {
    constructor(x, y, w, h) {
      this.pos = createVector(x, y);
      this.width = w;
      this.height = h;
    }

    render() {
      rectMode(CORNER);
      noStroke();
      fill(66, 244, 98);
      rect(this.pos.x, this.pos.y, this.width, this.height);
    }
}