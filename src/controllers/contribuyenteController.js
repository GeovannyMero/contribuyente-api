const contribuyenteService = require('../services/contribuyenteService');


const getByProvince = (req, res) => {
    try {
        const contriuyentes = contribuyenteService.getByProvince("");
        return res.send({ status: 'OK' });
    } catch (error) {
        res
            .status(500)
            .send({ status: 'FAILED' });
    }
}


module.exports = { getByProvince }