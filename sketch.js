var startX = 0;
var startY = 0;
var endX = 0;
var endY = 0;
var draw = false;

function draw(){
	if (draw == true){
		line(startX, startY, endX, endY);
	}
}
function setup() {
	createCanvas(640, 480);
}
function mousePressed(){
	draw = false;

	startX = mouseX;
	startY = mouseY;
}
function mouseReleased() {
	endX = mouseX;
	endY = mouseY;

	draw = true;
}