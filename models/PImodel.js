const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// PI Schema
const PISchema = new Schema({
    name: {
        type: String,
        required: [true, '*Campo obrigatório!']
    },
    details: {
        type: String,
    },
    status: {
        type: Boolean,
        default: true,
    }
});

const PI = mongoose.model('PontosInteresse', PISchema);

module.exports = PI;