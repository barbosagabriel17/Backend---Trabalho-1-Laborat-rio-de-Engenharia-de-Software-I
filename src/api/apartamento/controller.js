const Apartamento = require('./model');

const createApartamento = async (req, res) => {
  
    const apartamento = new Apartamento({
        nome: req.body.nome,
        quarto: req.body.quarto,
        suite: req.body.suite,
        garagem: req.body.garagem,
        sala: req.body.sala,
        armarioEmbutido: req.body.armarioEmbutido,
        endereco: req.body.endereco,
        metros: req.body.metros,
        idBairro: req.body.idBairro,
        andar: req.body.andar,
        condominio: req.body.condominio,
        aluguel: req.body.aluguel,
        portaria24h: req.body.portaria24h,
        descricao: req.body.descricao,
    });
    console.log('ok');

    try {
        const savedApartamento = await apartamento.save();
        res.status(201).json({id: apartamento._id});
    } catch (err) {
        res.status(400).json({errorMessage: err});
    }
}

const obterApartamentos = async (req, res) => {
    
    try{
        const apartamentos = await Apartamento.find();
        res.json(apartamentos)
    } catch (err){
        res.status(400).json({message: err});
    }

}

module.exports.createApartamento = createApartamento;
module.exports.obterApartamentos = obterApartamentos;