var startX = 0;
var startY = 0;
var endX = 0;
var endY = 0;

var toLine = false;
var toErase = false;

var black = color(0, 0, 0);
var white = color(255, 255, 255);

var lineButton;
var button;

function setup() {
	createCanvas(800, 600);

	background(0);

	button = createButton('click me');
	button.position(0, 50);
	button.mousePressed(changeBG);

	lineButton = createButton('Draw Line');
	lineButton.position(0, 10);
	lineButton.mousePressed(line);

	//eraseButton = createButton('Erase');
	//eraseButton.position(0, 80);
	//eraseButton.mousePressed(erase);
}
function changeBG(){
	var val = (Math.random()*105)+150;
	background(val);
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