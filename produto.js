var http = require('http');

http.createServer(function(request, response){
	response.end('sim');
}).listen(3000, 'localhost');

console.log('servidor rodando');
