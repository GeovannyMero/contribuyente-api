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


module.exports = { getbyProvince }