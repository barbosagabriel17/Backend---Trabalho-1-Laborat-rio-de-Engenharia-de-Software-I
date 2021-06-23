const router = require('express').Router();

const { createCasa, obterCasas } = require('./controller');


router.post('/create',  (req, res) => {
    createCasa(req, res);
});

router.get('/get', async (req, res) => {
    obterCasas(req, res);
});

module.exports = router;