const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  draw();
});

const image = new Image();
image.src = "alucard.png";

window.addEventListener("load", draw);

function draw() {
  ctx.drawImage(image, 0, 0);
}
