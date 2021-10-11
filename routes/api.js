const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiController');

// url para testar conexão
router.get('/teste', apiController.test);

// ToDo: listar pontos da base de dados
router.get('/details', apiController.details);

// ToDo: adicionar novo pontos
router.get('/interest', apiController.add);

// ToDo: atualizar ponto de interesse
router.get('/interest/:id', apiController.update);

// ToDo: apagar ponto de interesse
router.get('/interest/:id', apiController.delete);

module.exports = router;