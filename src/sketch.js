let palyer;
let ground;
let tree;

function setup() {
  createCanvas(400, 600);
  ground = new Ground(0, height - height/4, width, height/4);
  player = new Player(20, width/2, ground.pos.y - 10);
  tree = new Tree(width/4, ground.pos.y - 20, 'Pine');
}

function draw() {
  background(66, 134, 244);
  if(tree.hits > 0) tree.render();
  player.render();
  player.update();
  ground.render();

}

function mouseClicked() {
    if(player.stop = true) player.stop = false;
    if(intersect(player.pos.x, tree.pos.x)) {
      tree.hits -= 1;
      console.log(tree.hits);
    }
  }

function intersect(x1, x2) {
  if(x1 >= x2 - player.size && x1 <= x2 + player.size) {
    return true;
  }
  return false;
}

function fps() {
  textSize(15);
  fill(255);
  text(round(frameRate()), 5, 15);
}