const express = require('express');
const contribuyenteController = require('../../controllers/contribuyenteController');


const router = express.Router();


router.get('/provincia', contribuyenteController.getByProvince);

router.get('/ruc/:ruc', contribuyenteController.getByRuc)

module.exports = router;