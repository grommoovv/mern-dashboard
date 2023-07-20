import $axios from '../../../../shared/api/api'
import { IProduct } from '../types/Product'

export default class ProductService {
  static fetchAllProducts() {
    return $axios.get<IProduct[]>('/shop/products')
  }

  static fetchOneProduct(id: number) {
    return $axios.get<IProduct>(`/shop/products/${id}`)
  }
}
