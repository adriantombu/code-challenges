const express = require('express')
const router = express.Router()

const importController = require('./controllers/import')
const enrichmentController = require('./controllers/enrichment')
const productController = require('./controllers/product')

router.get('/import/products', importController.importProducts)
router.get('/enrichment/products/color', enrichmentController.setProductsDominantColor)
router.get('/products/:id/similar', productController.getSimilarProductsByColor)

module.exports = router
