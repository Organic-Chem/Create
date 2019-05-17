var startX = 0;
var startY = 0;
var endX = 0;
var endY = 0;

var toLine = false;
var toErase = false;

var black = color(0, 0, 0);
var white = color(255, 255, 255);

var lineButton;

function setup() {
	createCanvas(640, 480);

	lineButton = createButton('Draw Line');
	lineButton.position(0, 10);
	lineButton.mousePressed(line);

	//eraseButton = createButton('Erase');
	//eraseButton.position(0, 80);
	//eraseButton.mousePressed(erase);
}
function line(){
	toLine = true;
	toErase = false;

	document.write("The Line Function Has Been Called");
}
function mousePressed(){
	startX = mouseX;
	startY = mouseY;
}
function mouseReleased() {
	endX = mouseX;
	endY = mouseY;
	
	line(startX, startY, endX, endY);
}
function erase(){
	toErase = true;
	toLine = false;
}