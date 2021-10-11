// associando a dependência express instalada
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(`mongodb+srv://eu-mesmo:${process.env.DB_PASSWORD}@nodejscluster.zv7rq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);

mongoose.connection.on('connected', function () {
    console.log('Connected to Database Server ' + 'test');
})

mongoose.connection.on('error', function (err) {
    console.log('Database error ' + err)
})


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