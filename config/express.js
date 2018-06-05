// representa o express
var express = require('express');
var load = require('express-load');

// exportar o module quando esse arquivo for chamado
module.exports = function(){

  var app = express();

  // definir variaveis dentro do express e que passa peli sistema inteiro
  app.set('view engine', 'ejs');
  // aonde está as views
  app.set('views', './app/views');

  // carregar tudo q está em routes, que por sua vez está dentro de app
  load('routes', {cwd: 'app'})
      .into(app);

  return app;
}
