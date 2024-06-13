const contribuyenteService = require('../services/contribuyenteService');


const getByProvince = async (req, res) => {
    try {
        const contribuyentes = await  contribuyenteService.getByProvince(req.query.name);
        return res.send({ status: 'OK', data: contribuyentes });
    } catch (error) {
        res
            .status(500)
            .send({ status: 'FAILED' });
    }
}


module.exports = { getByProvince }