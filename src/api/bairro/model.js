const mongoose = require('mongoose');

const bairroSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        min: 6,
        max: 256
    }
});

module.exports = mongoose.model('Bairro', bairroSchema);