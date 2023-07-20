module.exports = class ProductDto {
  id
  title
  description
  scent
  price
  image

  constructor(model) {
    this.id = model._id
    this.title = model.title
    this.description = model.description
    this.scent = model.scent
    this.price = model.price
    this.image = model.image
  }
}
