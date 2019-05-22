//Antonio Mastroguiseppe	ICS4U	Ms. Cullum
//**THE ERASE BUTTON DISABLES DRAWING, BUT ACTUAL ERASING IS NOT IMPLEMENTED**

//Varaibles to store the coordinates of the mouse for drawing
//lines
var startX = 0;
var startY = 0;
var endX = 0;
var endY = 0;

//Toggles whether you are drawing or erasing
var toLine = true;
var toErase = false;

//Stores the colour of the background
var backgroundColour;

//Variables for the buttons
var lineButton;
var backgroundButton;
var eraseButton;
var clearButton;

//Setup function
function setup(){
	//Creates a canvas that can be drawn on
	createCanvas(800, 600);

	//sets the colour of the background
	background(150);

	//Creates the line button and what is called when it is pressed
	lineButton = createButton('Draw Line');
	lineButton.position(20, 10);
	lineButton.mousePressed(setLine);

	//Creates the erase button and what is called when it is pressed
	eraseButton = createButton('Erase');
	eraseButton.position(110, 10);
	eraseButton.mousePressed(setErase);

	//Creates the clear button and what is called when it is pressed
	clearButton = createButton('Clear');
	clearButton.position(180, 10);
	clearButton.mousePressed(clearScreen);

	//Creates the background button and what is called when it is pressed
	backgroundButton = createButton('Change Background');
	backgroundButton.position(250, 10);
	backgroundButton.mousePressed(changeBackground);
}
//Toggles drawing on and erasing off
function setLine(){
	toLine = true;
	toErase = false;
}
//Toggles erasing on and drawing off
function setErase(){
	toErase = true;
	toLine = false;
}
//Clears the screen to the current background colour
function clearScreen(){
	background(backgroundColour);
}
//Changes the background colour to a random shade of
//light grey
function changeBackground(){
	backgroundColour = (Math.random()*105)+150;
	background(backgroundColour);
}
//Records the coordinates where the mouse was pressed
function mousePressed(){
	startX = mouseX;
	startY = mouseY;
}
//Records the coordinates where the mouse was released
//and draws a line between the coordinates where the mouse
//was pressed and where it was released
function mouseReleased(){
	endX = mouseX;
	endY = mouseY;
	
	//Draws the line only if drawing is enabled
	if(toLine == true){
		fill(0);
		line(startX, startY, endX, endY);
	}
}