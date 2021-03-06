const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.scale(5, 5);
ctx.imageSmoothingEnabled = false;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.scale(5, 5);
  ctx.imageSmoothingEnabled = false;
});

const image = new Image();
image.src = "mario.png";

class Mario {
  constructor(x, y) {
    this.position = { x, y };
    this.velocity = { x: 0.8, y: 0 };
    this.countLoop = 0;
    this.frame = 0;
  }
  draw() {
    ctx.drawImage(
      image,
      5 + this.frame * 16,
      4,
      16,
      32,
      this.position.x,
      this.position.y,
      16,
      32
    );
    this.countLoop++;
    if (this.countLoop >= 1000 / 60) {
      this.countLoop = 0;
      if (this.frame != 1) this.frame = 1;
      else this.frame = 0;
    }
  }
  move() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if (this.position.x >= canvas.width - 650) this.position.x = -16;
  }
}

const marioStack = [new Mario(0, 10), new Mario(0, 45), new Mario(0, 80)];

function run() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  marioStack.forEach((item) => {
    item.move();
  });
  marioStack.forEach((item) => {
    item.draw();
  });
  window.requestAnimationFrame(run);
}

window.addEventListener("load", run);
