module.exports = function(app){
  app.get('/livros', function(req, res){ // primeira rota
    // render procura pela pasta views
    res.render('books/index');
    // res.send('books/index');
  });
}
