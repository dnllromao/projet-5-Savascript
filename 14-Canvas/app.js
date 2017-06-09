var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');





ctx.beginPath();
ctx.moveTo(35,170);
ctx.lineTo(150,50);
ctx.lineTo(265,170);
ctx.lineTo(35,170);
ctx.linewidth = 10;
ctx.stroke();

ctx.beginPath();
ctx.rect(50, 150,200,200);
ctx.stroke();


ctx.beginPath();
ctx.fillStyle = "blue";
ctx.arc(150,110,30,0, 2*Math.PI);
ctx.fill();
ctx.stroke();

// ctx.fillStyle = 'green';
// ctx.fillRect(10, 10, 100, 100);
// ctx.clearRect(45, 45, 60, 60);
// ctx.strokeRect(50, 50, 50, 50);