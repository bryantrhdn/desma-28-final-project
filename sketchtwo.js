var socket;

function setup() {
  createCanvas(400, 400);
  background(220);
  noStroke();

  socket = io.connect();
  socket.on('mouse', newDrawing);
}

function newDrawing(data){ //what other ppl do to ur screen
	fill('blue');
	ellipse(data.x,data.y,30,30);
}

function mouseDragged(){ //what u do on ur own screen
	fill(255);
	ellipse(mouseX,mouseY,30,30);
	console.log('Sending:' + mouseX + ',' + mouseY)

	var data = {
		x: mouseX,
		y: mouseY
	}

	socket.emit('mouse', data);
}

function draw() {
  

  
}