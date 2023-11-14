const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let image = new Image();
image.src = "./res/img/logo.png";
let x = 0;
let y = 0;
let xVelocity = 0.5;
let yVelocity = 0.5;
let imageWidth = 300;
let imageHeight = 300;

window.addEventListener("resize", () =>{
  resizeCanvas();
})
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  }

window.onload = () =>{
  resizeCanvas();
  
  setInterval(() => {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    x += xVelocity;
    y += yVelocity;
    if (y + imageHeight >= canvas.height || y <= 0) {
      yVelocity *= -1;
    }
    if (x + imageWidth >= canvas.width || x<= 0) {
      xVelocity *= -1;
    }
    ctx.drawImage(image,x, y, imageWidth, imageHeight);
  }, 1);
}

/*
ctx.fillStyle = "orange";
ctx.fillRect(100, 200, 80, 150);

ctx.strokeStyle = "blue"
ctx.strokeRect(225, 250, 80, 150);

ctx.fillStyle = "pink";
ctx.fillRect(100, 450, 80, 150);

ctx.fillStyle = "green";
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(50, 100);
ctx.lineTo(100, 100);
ctx.lineTo(50, 50);
ctx.fill();
ctx.stroke();

ctx.fillStyle = "yellow"
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "black";
ctx.moveTo(80 , 20);
ctx.lineTo(80, 50);
ctx.moveTo(105 , 20);
ctx.lineTo(105, 50);
ctx.moveTo(100 , 70);
ctx.lineTo(120, 70);
ctx.stroke();
*/
