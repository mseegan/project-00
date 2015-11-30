
//game canvas
var canvas;
var canvasContext;

//player 1 variables
var ball1X = 10;
var ball1Y = 50;
var ballSpeed1X = 1;
var ballSpeed1Y = 20;
//player 2 variables
var ball2X = 10;
var ball2Y = 350;
var ballSpeed2X = -1;
var ballSpeed2Y = -20;
//win condition variables
var laps1 = 0;
var laps2 = 0;


window.onload = function () {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	var framesPerSecond = 10;
	setInterval(function() {
		move();
		draw();
	}, 500/framesPerSecond );
};
//text below resets player 1
function ball1Reset() {
	ballSpeed1X = -ballSpeed1X;
	ball1X = 10;
	ball1Y = 50;
}
//text below resets player 2
function ball2Reset() {
	ballSpeed2X = -ballSpeed2X;
	ball2X = 10;
	ball2Y = 350;
}
//player movement input
function playerOneMove(key){
	// alert(key.keyCode);
	if(key.keyCode===39) {
		ballSpeed1X = ballSpeed1X + 1;
		//Right Arrow Key: 39
	} 	if(key.keyCode===68) {
		ballSpeed2X = ballSpeed2X - 1;
		//D Key: 68
	}
}
function move () {
//player 1 bounce
	ball1X = ball1X + ballSpeed1X;
	ball1Y = ball1Y + ballSpeed1Y;
	if (ball1X > canvas.width) {
		ball1Reset();
		laps1++;
		$('#pOneLaps').text("Laps: " + laps1);
		winner();
		
	}
	if(ball1X < 0) {
		ballSpeed1X = -ballSpeed1X;
	}
	if (ball1Y < 0) {
		ballSpeed1Y = -ballSpeed1Y;
	}
	if(ball1Y > canvas.height) {
		ballSpeed1Y = -ballSpeed1Y; 
	}

document.onkeyup = playerOneMove;

//player 2 bounce
	ball2X = ball2X - ballSpeed2X;
	ball2Y = ball2Y - ballSpeed2Y;
	if (ball2X > canvas.width) {
		ball2Reset();
		laps2++;
		$('#pTwoLaps').text("Laps: " + laps2);
		winner();
	}
	if(ball2X < 0) {
		ballSpeed2X = -ballSpeed2X;
	}
	if (ball2Y < 0) {
		ballSpeed2Y = -ballSpeed2Y;
	}
	if(ball2Y > canvas.height) {
		ballSpeed2Y = -ballSpeed2Y; 
	}
}

//Lap Counter + Win Conditions
	function winner(){
		
		if (laps1 >= 20) {
			alert("Player One Wins!");
		} if (laps2 >= 20){
			alert("Player Two Wins!");
		} if (laps1 >= 20 || laps2 >= 20) {
			ball1X = 10;
			ball1Y = 50;
			ballSpeed1X = 1;
			ballSpeed1Y = 20;
			ball2X = 10;
			ball2Y = 350;
			ballSpeed2X = -1;
			ballSpeed2Y = -20;

			laps1 = 0;
			$('#pOneLaps').text("Laps: " + laps1);
			laps2 = 0;
			$('#pTwoLaps').text("Laps: " + laps2);
}
		
	}


function draw() {
	colorRect(0,0,canvas.width,canvas.height, 'black');
	colorCircle(ball1X, ball1Y, 10, 'green');
	colorCircle(ball2X, ball2Y, 10, 'blue');
}

function colorRect(leftX,topY, width,height, drawColor) {
	canvasContext.fillStyle = drawColor;
	canvasContext.fillRect(leftX,topY, width,height);
}
function colorCircle(centerX, centerY, radius, drawColor) {

	canvasContext.fillStyle = drawColor;
	canvasContext.beginPath();
	canvasContext.arc(centerX, centerY, radius, 0,Math.PI*2, true);
	canvasContext.fill();

}
