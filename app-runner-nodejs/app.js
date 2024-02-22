// Require http header 
var http = require('http'); 

var msg = 'About to deploy App!'
console.log(msg);

// Create server 
http.createServer(function (req, res) { 

	// HTTP Status: 200 : OK 
	// Content Type: text/html 
	res.writeHead(200, {'Content-Type': 'text/html'}); 
	
	// Send the response body as "some text" 
	res.end('App Runner Demo with a Sample Nodejs App!'); 

}).listen(8080); 

