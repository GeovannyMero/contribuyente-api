const contribuyenteData = require('../database/Contribuyente')


const getByProvince = (provinceName) => {
    try {
        var data = contribuyenteData.getbyProvince(provinceName);
        return data;
    } catch (error) {
        throw error;
    }
} 

module.exports = {getByProvince}