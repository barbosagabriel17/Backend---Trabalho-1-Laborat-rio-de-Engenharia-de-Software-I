const router = require('../../services/router/index')();

const { createVisita, obterVisitas } = require('./controller');


router.post('/create',  (req, res) => {
    createVisita(req, res);
});

router.get('/get', async (req, res) => {
    obterVisitas(req, res);
});

module.exports = router;