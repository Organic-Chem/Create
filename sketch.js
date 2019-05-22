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

function setup() {
	createCanvas(800, 600);

	background(150);

	lineButton = createButton('Draw Line');
	lineButton.position(20, 10);
	lineButton.mousePressed(setLine);

	backgroundButton = createButton('Change Background');
	backgroundButton.position(180, 10);
	backgroundButton.mousePressed(changeBackground);

	eraseButton = createButton('Erase');
	eraseButton.position(110, 10);

	//eraseButton = createButton('Erase');
	//eraseButton.position(0, 80);
	//eraseButton.mousePressed(erase);
}
function setLine(){
	backgroundColour = Math.random()*10;
	background(backgroundColour);
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
	
	line(startX, startY, endX, endY);
}
function erase(){
	toErase = true;
	toLine = false;
}