exports.test = (req, res) => {
    res.send('Olá! Teste ao Controller');
}

// ToDo: listar os pontos
exports.details = function (req, res) {
    res.send({type: 'POST'});
};

// ToDo: adicionar novo ponto
exports.add = function (req, res) {
    console.log('You made a POST request: ', req.body);
    res.send({
        type: 'POST',
        name: req.body.name,
        rank: req.body.rank
    });
};

// ToDo: atualizar ponto
exports.update = function (req, res) {
    res.send({type: 'PUT'});
};

// ToDo: apagar o ponto
exports.delete = function (req, res) {
    res.send({type: 'DELETE'});
};