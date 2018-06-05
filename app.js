var express = require('express');
var app = express(); // representa o express

// definir variaveis dentro do express e que passa peli sistema inteiro
app.set('view engine', 'ejs');

app.get('/livros', function(req, res){ // primeira rota
  res.render('books/index');
  // res.send('books/index');
});

app.listen(3000, function(){
    console.log('servidor rodando');
});
