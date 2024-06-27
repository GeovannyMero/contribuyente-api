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

const getByRuc = async (req, res) => {
    try {
        var paramruc = req.params.ruc;
        console.log(paramruc);
        var contribuyente = await contribuyenteService.getByRuc(paramruc);

        if(contribuyente == null){
            return res
            .status(404)
            .send({status: 'Not Found', data: null});
        }else{
            return res.send({status:'OK', data: contribuyente});
        }
    } catch (error) {
        res
        .status(500)
        .send({status: 'DAILED'});
    }
}


module.exports = { getByProvince, getByRuc }