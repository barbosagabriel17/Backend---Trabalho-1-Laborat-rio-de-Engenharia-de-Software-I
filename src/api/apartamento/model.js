const mongoose = require('mongoose');

const apartamentoSchema = new mongoose.Schema({
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
    andar: {
        type: Number,
        required: true,
    },
    condominio: {
        type: Number,
        required: true,
    },
    portaria24h: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Apartamento', apartamentoSchema);