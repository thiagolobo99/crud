// associando a dependência express instalada
const express = require('express');

// inicializando a app express
const app = express();

let port = 5000;

// servidor estará ativo na porta 5000
// 'process.env.port', caso usemos o Heroku
app.listen(process.env.port || port, () => {
    console.log('Servidor em execução na porta: ' + port);
})