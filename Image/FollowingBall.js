const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const body = document.querySelector("body");
const image = new Image();
image.src = "./alucard.png";
body.append(image);
ctx.drawImage(image, 0, 0);
