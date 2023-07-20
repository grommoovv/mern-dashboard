const Router = require('express')
const ShopController = require('../controller/ShopController')

const router = new Router()

router.get('/products', ShopController.getAllProducts)
router.get('/products/:id', ShopController.getOneProduct)
router.delete('/products/:id', ShopController.deleteProduct)
router.patch('/products/:id', ShopController.updateProduct)

module.exports = router
