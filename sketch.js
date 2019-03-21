




var objectCurrent;

function setup() {
	createCanvas(1200, 600, WEBGL);
	rectMode(CENTER);
	imageMode(CENTER);
	//modelMode(CENTER);

	//ship
	shipPosition = new createVector(width / 2, height / 1.1);
	objectCurrent = loadModel('https://github.com/SamuelFarach/P5-3D-Interaction/blob/master/assets/pyramid2.obj');
}

function draw()
{
	background(210);

	objectDisplay();
}



function objectDisplay()
{
	push();
	translate(mouseX, mouseY);
	model(objectCurrent);
	pop();
}
