var startX = 0;
var startY = 0;
var endX = 0;
var endY = 0;

var black = color(0, 0, 0);
var white = color(255, 255, 255);

function setup() {
	createCanvas(640, 480);
}
function mousePressed(){
	startX = mouseX;
	startY = mouseY;
}
function mouseDragged(){
	fill(white);
	line(startX, startY, endX, endY);

	endX = mouseX;
	endY = mouseY;

	fill(black);
	line(startX, startY, endX, endY);
}
function mouseReleased() {
	endX = mouseX;
	endY = mouseY;

	line(startX, startY, endX, endY);
}