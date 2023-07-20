const ProductModel = require('../../../models/ProductModel')

class ShopService {
  async getAllProducts() {
    const products = await ProductModel.find()

    if (!products) {
      throw ApiError.BadRequest(`Товары не найден`)
    }

    return products
  }

  async getOneProduct(id) {
    const product = await ProductModel.findOne({ id: `${id}` })

    if (!product) {
      throw ApiError.BadRequest(`Товар не найден`)
    }

    return product
  }

  async updateProduct(id, description, price) {
    const product = await ProductModel.findOne({ id: id })

    if (!product) {
      throw ApiError.BadRequest(`Товар не найден`)
    }

    const response = await ProductModel.updateOne(
      { id: id },
      {
        description: description,
        price: price,
      },
      { new: true }
    )

    const updatedProduct = await ProductModel.findOne({ id: id })

    return {
      product,
      updatedProduct,
      response,
    }
  }

  async deleteProduct(id) {
    const product = await ProductModel.findOne({ id: id })

    if (!product) {
      throw ApiError.BadRequest(`Товар не найден`)
    }

    const response = await ProductModel.deleteOne({ id: id })
    return {
      product,
      response,
    }
  }
}

module.exports = new ShopService()
