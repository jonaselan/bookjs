var app = require('./config/express')();
// esses paranteses no final serve para retornar como uma função
var routesBooks = require('./app/routes/books')(app);

app.listen(3000, function(){
    console.log('servidor rodando');
});
