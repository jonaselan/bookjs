var express = require('express');
var app = express(); // representa o express

app.get('/livros', function(req, res){ // primeira rota
  res.send('lista de livros');
});

app.listen(3000, function(){
    console.log('servidor rodando');
});
