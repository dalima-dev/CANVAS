const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const ball = {
  radius: 30,
  position: {
    x: canvas.width / 2,
    y: canvas.height / 2,
  },
  velocity: {
    x: 5,
    y: 5,
  },
};

function moveBall(ball) {
  ball.position.x += ball.velocity.x;
  ball.position.y += ball.velocity.y;
  collision(ball);
}

function drawBall(ball) {
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(ball.position.x, ball.position.y, 30, 0, Math.PI * 2);
  ctx.fill();
}

function collision(ball) {
  if (
    ball.position.x + ball.radius >= canvas.width ||
    ball.position.x - ball.radius <= 0
  )
    ball.velocity.x *= -1;
  if (
    ball.position.y + ball.radius >= canvas.height ||
    ball.position.y - ball.radius <= 0
  )
    ball.velocity.y *= -1;
}

function run() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  moveBall(ball);
  drawBall(ball);
  requestAnimationFrame(run);
}

run();
