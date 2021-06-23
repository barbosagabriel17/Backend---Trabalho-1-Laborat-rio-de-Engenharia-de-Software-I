const Casa = require('./model');

const createCasa = async (req, res) => {
  
    const data = req.body;

    const casa = new Casa({
        nome: req.body.nome,
        quarto: req.body.quarto,
        suite: req.body.suite,
        garagem: req.body.garagem,
        sala: req.body.sala,
        armarioEmbutido: req.body.armarioEmbutido,
        endereco: req.body.endereco,
        metros: req.body.metros,
        idBairro: req.body.idBairro,
    });
    console.log('ok');

    try {
        const savedCasa = await casa.save();
        res.status(201).json({id: casa._id});
    } catch (err) {
        res.status(400).json({errorMessage: err});
    }
}

const obterCasas = async (req, res) => {

    try{
        const bairros = await Casa.find();
        res.json(bairros)
    } catch (err){
        res.status(400).json({message: err});
    }

}

module.exports.createCasa = createCasa;
module.exports.obterCasas = obterCasas;