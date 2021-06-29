const mongoose = require('mongoose');

const casaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        min: 6,
        max: 256
    },
    quarto: {
        type: Number,
        required: true,
    },
    suite: {
        type: Number,
        required: true,
    },
    garagem: {
        type: Number,
        required: true,
    },
    sala: {
        type: Number,
        required: true,
    },
    metros: {
        type: Number,
        required: true,
    },
    armarioEmbutido: {
        type: Number,
        required: true,
    },
    endereco: {
        type: String,
        required: true,
        min: 6,
        max: 256
    },
    idBairro: {
        type: String,
        required: true,
        min: 6,
        max: 256
    },
    aluguel: {
        type: Number,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
        min: 6,
        max: 256
    },
});

module.exports = mongoose.model('Casa', casaSchema);