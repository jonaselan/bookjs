// esses paranteses no final serve para retornar como uma função
// pode-ser passar parâmetros
var app = require('./config/express')();

app.listen(3000, function(){
    console.log('servidor rodando');
});
