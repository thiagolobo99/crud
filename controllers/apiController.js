const PI = require('../models/PImodel');

exports.test = (req, res) => {
    res.send('Olá! Teste ao Controller');
}

// ToDo: listar os pontos
exports.details = function (req, res) {
    res.send({
        type: 'POST'
    });
};

// ToDo: adicionar novo ponto
exports.add = function (req, res, next) {
    console.log(next)
    console.log('A requisição chegou na função CREATE')
    PI.create(req.body).then(function (pi) {
        console.log(pi)
        res.send(pi);
    }).catch(next);
};

// ToDo: atualizar ponto
exports.update = function (req, res) {
    res.send({
        type: 'PUT'
    });
};

// ToDo: apagar o ponto
exports.delete = function (req, res, next) {
    PI.findByIdAndRemove({
        _id: req.params.id
    }).then(function (pi) {
        res.send(`O documento com id: ${pi.id} foi deletado com sucesso.`);
    }).catch(next);
};