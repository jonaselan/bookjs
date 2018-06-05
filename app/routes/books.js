var db_books = [
  { id: 1, name: 'livro1'},
  { id: 2, name: 'livo2' }
];

module.exports = function(app){
  app.get('/livros', function(req, res){ // primeira rota
    // simular busca ao banco
    // console.log(db_books);

    // render procura pela pasta views
    res.render('books/index', {books: db_books});
    // res.send('books/index');
  });
}
