import { FC } from 'react'
import { IProduct } from '../../model/types/Product'
import cls from './ProductElement.module.scss'

interface ProductElementProps {
  product: IProduct
}

export const ProductElement: FC<ProductElementProps> = ({ product }) => {
  return (
    <>
      <div className={cls.product}>
        <div className={cls.id}>{product.id}</div>
        <div className={cls.title}>{product.title}</div>
        <div className={cls.orderQty}>{product.price}</div>
        <div className={cls.orderAmount}>3000</div>
        <div className={cls.date}>13.04.2004</div>
        <div className={cls.action}>
          <button className={cls.edit}>
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M1.02427 14.9754H2.12336L12.2575 4.83746L11.1584 3.73795L1.02427 13.8759V14.9754ZM14.4497 4.10052L11.8891 1.55075L13.1261 0.313307C13.3349 0.104436 13.584 0 13.8736 0C14.1631 0 14.4123 0.104436 14.6211 0.313307L15.6808 1.37341C15.8896 1.58228 15.9959 1.82957 15.9999 2.11527C16.0038 2.40099 15.9014 2.64828 15.6926 2.85715L14.4497 4.10052ZM13.7131 4.84337L2.56064 16H0V13.4384L11.1525 2.28177L13.7131 4.84337Z' />
            </svg>
          </button>

          <button className={cls.delete}>
            <svg
              width='14'
              height='16'
              viewBox='0 0 14 16'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M4.4 11.7464L7 9.10831L9.6 11.7464L10.3077 11.0283L7.7077 8.39025L10.3077 5.75221L9.6 5.03415L7 7.6722L4.4 5.03415L3.6923 5.75221L6.2923 8.39025L3.6923 11.0283L4.4 11.7464ZM2.61537 16C2.15512 16 1.77083 15.8436 1.4625 15.5307C1.15417 15.2179 1 14.828 1 14.361V1.79514H0V0.780507H4V0H10V0.780507H14V1.79514H13V14.361C13 14.828 12.8458 15.2179 12.5375 15.5307C12.2292 15.8436 11.8449 16 11.3846 16H2.61537ZM12 1.79514H2V14.361C2 14.5171 2.0641 14.6602 2.1923 14.7903C2.32052 14.9203 2.46154 14.9854 2.61537 14.9854H11.3846C11.5385 14.9854 11.6795 14.9203 11.8077 14.7903C11.9359 14.6602 12 14.5171 12 14.361V1.79514Z' />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}
