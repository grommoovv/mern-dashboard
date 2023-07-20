import { FC } from 'react'
import cls from './Overview.module.scss'

export const Overview: FC = () => {
  const boost = +9

  const boostClass = [cls.boost]

  if (boost > 0) {
    boostClass.push(cls.green)
  } else {
    boostClass.push(cls.red)
  }

  return (
    <>
      <div className={cls.overview}>
        <div className={cls.module}>
          <div className={cls.module__wrap}>
            <div className={cls.title}>Общий доход</div>
            <div className={cls.current}>
              <div className={cls.display}>349₽</div>
              <div className={boostClass.join(' ')}>+112₽</div>
            </div>
          </div>
        </div>
        <div className={cls.module}>
          <div className={cls.module__wrap}>
            <div className={cls.title}>Всего заказов</div>
            <div className={cls.current}>
              <div className={cls.display}>5</div>
              <div className={boostClass.join(' ')}>+2</div>
            </div>
          </div>
        </div>
        <div className={cls.module}>
          <div className={cls.module__wrap}>
            <div className={cls.title}>Всего пользователей</div>
            <div className={cls.current}>
              <div className={cls.display}>9</div>
              <div className={boostClass.join(' ')}>+9</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
