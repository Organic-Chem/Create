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
	lineButton.position(0, 10);
	lineButton.mousePressed(line);

	backgroundButton = createButton('Change Background');
	backgroundButton.position(120, 10);
	backgroundButton.mousePressed(changeBG);

	eraseButton = createButton('Erase');
	eraseButton.position(70, 10);

	//eraseButton = createButton('Erase');
	//eraseButton.position(0, 80);
	//eraseButton.mousePressed(erase);
}
function line(){
	background(0);
}
function changeBG(){
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