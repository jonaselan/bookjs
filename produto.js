// adicionar lib para levantar servidor
var http = require('http');

// há requisições e respostas
http.createServer(function(request, response){
	response.end('sim');
}).listen(3000, 'localhost'); // criar servidor q escuta na porta 3000

// msg no terminal
console.log('servidor rodando');
