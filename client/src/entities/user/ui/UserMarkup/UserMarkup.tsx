import { FC } from 'react'
import cls from './UserMarkup.module.scss'

export const UserMarkup: FC = () => {
  return (
    <>
      <div className={cls.markup}>
        <div className={cls.id}>id</div>
        <div className={cls.username}>Имя</div>
        <div className={cls.orderQty}>Кол-во заказов</div>
        <div className={cls.orderAmount}>Сумма заказов</div>
        <div className={cls.date}>Дата регистрации</div>
        <div className={cls.action}>Действия</div>
      </div>
    </>
  )
}
