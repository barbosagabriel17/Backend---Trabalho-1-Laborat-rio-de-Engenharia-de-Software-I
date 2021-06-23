const router = require('express').Router();

const { createBairro, obterBairros } = require('./controller');


router.post('/create',  (req, res) => {
    createBairro(req, res);
});

router.get('/get', async (req, res) => {
    obterBairros(req, res);
});

module.exports = router;