const Bairro = require('./model');

const createBairro = async (req, res) => {
  
    const data = req.body;

    const bairro = new Bairro({
        nome: req.body.nome
    });
    console.log('ok');

    try {
        const savedBairro = await bairro.save();
        res.status(201).json({id: bairro._id});
    } catch (err) {
        res.status(400).json({errorMessage: err});
    }
}

const obterBairros = async (req, res) => {

    try{
        const bairros = await Bairro.find();
        res.json(bairros)
    } catch (err){
        res.status(400).json({message: err});
    }

}

module.exports.createBairro = createBairro;
module.exports.obterBairros = obterBairros;