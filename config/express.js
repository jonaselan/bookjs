// representa o express
var express = require('express');
var app = express();

// definir variaveis dentro do express e que passa peli sistema inteiro
app.set('view engine', 'ejs');
// aonde está as views
app.set('views', './app/views');

// exportar o module quando esse arquivo for chamado
module.exports = function(){
  return app;
}
