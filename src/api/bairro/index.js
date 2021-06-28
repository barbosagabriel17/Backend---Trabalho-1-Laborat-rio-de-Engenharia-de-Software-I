const router = require('../../services/router/index')();

const { createBairro, obterBairros } = require('./controller');


router.post('/create',  (req, res) => {
    createBairro(req, res);
});

router.get('/get', async (req, res) => {
    obterBairros(req, res);
});

module.exports = router;