const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

class Ball {
  constructor(x, y, radius, timeOfBirth, lifeTime) {
    (this.lifeTime = lifeTime),
      (this.timeOfBirth = timeOfBirth),
      (this.radius = radius),
      (this.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      })`),
      (this.position = { x, y });
    this.velocity = {
      x: Math.random() * 8,
      y: Math.random() * -8,
    };
  }
  drawBall() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
  moveBall() {
    this.velocity.y += this.gravity;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    wallCollision(this);
    if (this.position.y + this.radius >= canvas.height)
      this.velocity.y += this.friction;
  }
  get gravity() {
    return 1;
  }
  get friction() {
    return 5;
  }
}

function wallCollision(ball) {
  if (
    ball.position.x + ball.radius >= canvas.width ||
    ball.position.x - ball.radius <= 0
  ) {
    if (ball.position.x + ball.radius >= canvas.width)
      ball.position.x = canvas.width - ball.radius;
    if (ball.position.x - ball.radius <= 0) ball.position.x = ball.radius;
    ball.velocity.x *= -1;
  }
  if (
    ball.position.y + ball.radius >= canvas.height ||
    ball.position.y - ball.radius <= 0
  ) {
    if (ball.position.y + ball.radius >= canvas.height)
      ball.position.y = canvas.height - ball.radius;
    if (ball.position.y - ball.radius <= 0) ball.position.y = ball.radius;
    ball.velocity.y *= -1;
  }
}

const particles = [];
window.addEventListener("click", (event) => {
  for (let i = 0; i < 3; i++)
    particles.push(
      new Ball(
        event.x,
        event.y,
        Math.random() * 50 + 10,
        window.performance.now(),
        5000
      )
    );
});

function run() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  //while (particles.length > 100) particles.shift();
  for (let index = 0; index < particles.length; index++) {
    if (
      window.performance.now() - particles[index].timeOfBirth >=
      particles[index].lifeTime
    )
      particles.splice(index, 1);
  }
  particles.forEach((ball) => {
    ball.moveBall();
  });
  particles.forEach((ball) => {
    ball.drawBall();
  });
  requestAnimationFrame(run);
}

run();
