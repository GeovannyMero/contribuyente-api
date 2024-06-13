const contribuyenteData = require('../database/Contribuyente')


const getByProvince = async (provinceName) => {
    try {
        var data = await contribuyenteData.getbyProvince(provinceName);
        return data;
    } catch (error) {
        throw error;
    }
} 

module.exports = {getByProvince}