const Visita = require('./model');

const createVisita = async (req, res) => {
  
    const data = req.body;

    const visita = new Visita({
        data: req.body.data,
        idCasa: req.body.idCasa,
        idApartamento: req.body.idApartamento
    });
    console.log('ok');

    try {
        const savedVisita = await visita.save();
        res.status(201).json({id: visita._id});
    } catch (err) {
        res.status(400).json({errorMessage: err});
    }
}

const obterVisitas = async (req, res) => {

    try{
        const visitas = await Visita.find();
        res.json(visitas)
    } catch (err){
        res.status(400).json({message: err});
    }

}

module.exports.createVisita = createVisita;
module.exports.obterVisitas = obterVisitas;