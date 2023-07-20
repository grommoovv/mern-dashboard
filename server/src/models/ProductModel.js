const { Schema, model } = require('mongoose')

const ProductModel = new Schema({
  id: { type: Number, unique: true, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  scent: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
})

module.exports = model('product', ProductModel)
