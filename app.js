var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('dist'));

server.listen(3000,'169.254.170.59',function(){
	console.log('server start')
});

app.get('/', function (req, res) {
 res.sendfile(__dirname + '/index.html');
});