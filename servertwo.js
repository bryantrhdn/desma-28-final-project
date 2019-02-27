var express = require('express');
var app = express();

var server = app.listen(process.env.PORT || 8080);

app.use(express.static('public'));

console.log("test");

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket){
	console.log('new connection ' + socket.id); //what happens when a new user goes on to the page

	socket.on('mouse', mouseMsg);

	function mouseMsg(data){
		socket.broadcast.emit('mouse',data);
		console.log(data);
	}
}

app.get("/", function(req, res) {
	res.render("index");
})
