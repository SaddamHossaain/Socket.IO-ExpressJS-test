const express = require('express'); // ExprssJS import from none_modules
const app = express();
const http = require('http'); //import http
const createServer = http.createServer(app); //server create

// Socket.io import and server
const {Server} = require('socket.io');
const io = new Server(createServer); //Object create of Server
// User in/out detect
io.on('connection', function(socket) {
    console.log("new User connected!");
    socket.on('disconnect', function() {
        console.log('User Disconnected!');
    })
})

// client side index.html file integrate
app.get('/', function(req, res) {
    res.sendFile(__dirname+"/index.html");
})

// server run
const { hostname } = require('os');
createServer.listen(3000, hostname, function() {
    console.log('Server run @ 3000 port');
});

