const contribuyenteService = require('../services/contribuyenteService');


const getByProvince = (req, res) => {
    try {
        console.log(req.query);
        const contribuyentes = contribuyenteService.getByProvince(req.query.name);
        console.log(contribuyentes)
        return res.send({ status: 'OK' });
    } catch (error) {
        res
            .status(500)
            .send({ status: 'FAILED' });
    }
}


module.exports = { getByProvince }