var app = require('./config/express')();

app.get('/livros', function(req, res){ // primeira rota
  res.render('books/index');
  // res.send('books/index');
});

app.listen(3000, function(){
    console.log('servidor rodando');
});
