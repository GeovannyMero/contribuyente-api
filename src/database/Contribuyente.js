const contribuyenteModel = require('../database/Models/contribuyentes')

const getbyProvince = async (provinceName) => {
    try {
        var data = await contribuyenteModel
            .find({ 'provincia_juridiccion': provinceName.toUpperCase() })
            .select('-_id')
            .limit(10)
            .exec();
        return data;
    } catch (error) {
        throw error;
    }
}


const getByRUC = async (ruc) => {
    try {
        
        var data = await contribuyenteModel
        .findOne({'ruc': ruc})
        .select('-_id')
        .exec();
        console.log(data);
        if(data == null){
            console.log('No existe data');
        }
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}


module.exports = { getbyProvince, getByRUC }