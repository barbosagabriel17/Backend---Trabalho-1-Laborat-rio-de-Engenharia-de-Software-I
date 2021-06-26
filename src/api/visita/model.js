const mongoose = require('mongoose');

const visitaSchema = new mongoose.Schema({
    dataAgendamento: {
        type:Date,
        required: true
    },
    idCasa: {
        type: mongoose.ObjectId,
        required: false
    },
    idApartamento: {
        type: mongoose.ObjectId,
        required: false
    }
});

module.exports = mongoose.model('Visita', visitaSchema);