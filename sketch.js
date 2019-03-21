




var objectCurrent;

function setup() {
	createCanvas(1200, 600, WEBGL);
	rectMode(CENTER);
	imageMode(CENTER);
	//modelMode(CENTER);

	//ship
	shipPosition = new createVector(width / 2, height / 1.1);
	objectCurrent = loadModel('assets/pyramid.obj');
}

function draw()
{
	background(210);

	objectDisplay();
}



function objectDisplay()
{
	model(objectCurrent);
}
