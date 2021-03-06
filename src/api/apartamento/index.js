const router = require('../../services/router/index')();

const { createApartamento, obterApartamentos } = require('./controller');


router.post('/create',  (req, res) => {
    createApartamento(req, res);
});

router.get('/get', async (req, res) => {
    obterApartamentos(req, res);
});

module.exports = router;