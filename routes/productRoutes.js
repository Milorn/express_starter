const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/products', productController.getProductsPage);

module.exports = router;