const express = require('express'); // ExprssJS import from none_modules
const app = express();
const http = require('http'); //import http
const { hostname } = require('os');
const createServer = http.createServer(app); //server create

// client side index.html file integrate
app.get('/', function(req, res) {
    res.sendFile(__dirname+"/index.html");
})

// server run
createServer.listen(3000, hostname, function() {
    console.log('Server run @ 3000 port');
});

