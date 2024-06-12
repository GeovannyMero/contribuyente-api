const mongoose = require('mongoose');

const ContribuyenteSchema = new mongoose.Schema({
    ruc: String
});

module.exports = mongoose.model('Model', ContribuyenteSchema, 'contribuyente');