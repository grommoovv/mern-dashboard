import { FC, useEffect, useState } from 'react'
import { IProduct } from '../../model/types/Product'
import ProductService from '../../model/service/ProductService'

import cls from './ProductList.module.scss'
import { Button } from '../../../../shared/ui/button/Button'
import { ProductElement } from '../ProductElement/ProductElement'

export const ProductList: FC = () => {
  const [isLoading, setLoading] = useState(false)
  const [products, setProducts] = useState<IProduct[]>(() => {
    // Проверка наличия пользователей localStorage

    const storage = localStorage.getItem('products')
    if (storage) {
      return JSON.parse(storage)
    } else {
      return []
    }
  })

  // useEffect(() => {
  //   getProducts()
  // }, [])

  async function getProducts() {
    setLoading(true)
    try {
      const response = await ProductService.fetchAllProducts()
      localStorage.setItem('products', JSON.stringify(response.data))
      setProducts(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className={cls.top}>
        <h1>Список товаров</h1>
        <Button
          className={cls.button}
          theme='outlined'
          onClick={() => getProducts()}
        >
          Загрузить
        </Button>
      </div>
      <div className={cls.markup}>
        <div className={cls.id}>id</div>
        <div className={cls.username}>Название</div>
        <div className={cls.orderQty}>Цена</div>
        <div className={cls.orderAmount}>Кол-во</div>
        <div className={cls.date}>Дата регистрации</div>
        <div className={cls.action}>Действия</div>
      </div>
      {isLoading && <div className={cls.loader}>Загрузка...</div>}
      {products && (
        <>
          <ul className={cls.list}>
            {products.map((product) => (
              <li className={cls.list__item} key={product.id}>
                <ProductElement product={product} />
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  )
}
