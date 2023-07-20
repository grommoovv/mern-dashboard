const ShopService = require('../service/ShopService')

class ShopController {
  async getAllProducts(req, res, next) {
    try {
      const products = await ShopService.getAllProducts()
      return res.json(products)
    } catch (error) {
      next(error)
    }
  }

  async getOneProduct(req, res, next) {
    try {
      const product = await ShopService.getOneProduct(req.params.id)
      return res.json(product)
    } catch (error) {
      next(error)
    }
  }

  async updateProduct(req, res, next) {
    try {
      const { id } = req.params
      const { description, price } = req.body

      const { product, updatedProduct, response } =
        await ShopService.updateProduct(id, description, price)

      return res.status(200).json({
        message: 'Товар успешно обновлен',
        product: product,
        updatedProduct: updatedProduct,
        info: response,
      })
    } catch (error) {
      res.status(500).json({ error: 'Не удалось обновить товар' })
    }
  }

  async deleteProduct(req, res, next) {
    try {
      const { id } = req.params
      const { product, response } = await ShopService.deleteProduct(id)
      return res.status(200).json({
        message: 'Товар успешно удален',
        product: product,
        info: response,
      })
    } catch (error) {
      res.status(500).json({ error: 'Не удалось удалить товар' })
    }
  }
}

module.exports = new ShopController()
