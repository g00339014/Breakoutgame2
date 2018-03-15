var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var ballColour = "#0095DD"

function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI*2);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
}
function draw () {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBall();
	x += dx;
	y += dy;
	if(y+ dy > canvas.height-ballRadius || y+dy <ballRadius){
		dy=-dy;
		ctx.fillStyle ="purple";
		ctx.fill();
	}
	if(x+dx > canvas.width-ballRadius || x+dx <ballRadius){
		dx=-dx;
		ctx.fillStyle = "purple";
		ctx.fill();
	}
	
}

setInterval(draw, 10);