var startX = 0;
var startY = 0;
var endX = 0;
var endY = 0;

function setup() {
	createCanvas(640, 480);
}

function draw() {
	line(startX, startY, endX, endY);
}
function mouseReleased() {
	endX = mouseX;
	endY = mouseY;

	draw();
}
function mousePressed(){
	startX = mouseX;
	startY = mouseY;
}