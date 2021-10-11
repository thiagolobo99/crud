// associando a dependência express instalada
const express = require('express');
const bodyParser = require('body-parser');

// inicializando a app express
const app = express();

// este middleware deve estar acima das routers-handlers
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('END POINT INVÁLIDO!')
});

const routes = require('./routes/api');
app.use('/api', routes);

let port = 5000;

// servidor estará ativo na porta 5000
// 'process.env.port', caso usemos o Heroku
app.listen(process.env.port || port, () => {
    console.log('Servidor em execução na porta: ' + port);
})