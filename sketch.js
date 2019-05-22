var startX = 0;
var startY = 0;
var endX = 0;
var endY = 0;

var toLine = false;
var toErase = false;

var black = color(0, 0, 0);
var white = color(255, 255, 255);
var backgroundColour;

var lineButton;
var backgroundButton;
var eraseButton
var clearButton

function setup() {
	createCanvas(800, 600);

	background(150);

	lineButton = createButton('Draw Line');
	lineButton.position(20, 10);
	lineButton.mousePressed(setLine);

	
	eraseButton = createButton('Erase');
	eraseButton.position(110, 10);

	clearButton = createButton('Clear');
	clearButton.position(180, 10);

	backgroundButton = createButton('Change Background');
	backgroundButton.position(250, 10);
	backgroundButton.mousePressed(changeBackground);
}
function setLine(){
	toLine = true;
	toErase = false;
}
function changeBackground(){
	backgroundColour = (Math.random()*105)+150;
	background(backgroundColour);
}
function mousePressed(){
	startX = mouseX;
	startY = mouseY;
}
function mouseReleased() {
	endX = mouseX;
	endY = mouseY;
	
	if(toLine == true){
		line(startX, startY, endX, endY);
	}
}
function erase(){
	toErase = true;
	toLine = false;
}