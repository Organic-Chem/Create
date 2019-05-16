var startX = 0;
var startY = 0;
var endX = 0;
var endY = 0;

var toLine = false;
var toErase = false;

var black = color(0, 0, 0);
var white = color(255, 255, 255);

function setup() {
	createCanvas(640, 480);

	lineButton = createButton('Draw Line');
	lineButton.position(0, 10);
	lineButton.mousePressed(line);

	eraseButton = createButton('Erase');
	eraseButton.position(0, 80);
	eraseButton.mousePressed(erase);
}
function mousePressed(){
	startX = mouseX;
	startY = mouseY;

	if (toErase == true){
		fill(white);
		ellipse(startX, startY, 20, 20);
	}
}
function mouseReleased() {
	endX = mouseX;
	endY = mouseY;

	if (toLine == true){
		fill(black);
		line(startX, StartY, endX, endY);
	}
}
function line(){
	toLine = true;
	toErase = false;
}
function erase(){
	toErase = true;
	toLine = false;
}