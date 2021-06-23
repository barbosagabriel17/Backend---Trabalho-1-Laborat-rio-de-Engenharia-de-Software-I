const Router = require('express');

const router = Router();

const casa = require('./casa/index');
const apartamento = require('./apartamento/index');
const bairro = require('./bairros/index');

router.use('/casa', casa);
router.use('/apartamento', apartamento);
router.use('/bairro', bairro);

module.exports = router;