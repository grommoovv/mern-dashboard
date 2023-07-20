import { FC } from 'react'
import cls from './LoadUsers.module.scss'
import { Button } from '../../../../shared/ui'

interface LoadUsersProps {
  length: number
  load: () => void
}

export const LoadUsers: FC<LoadUsersProps> = (props) => {
  const { length, load } = props

  console.log(length)

  return (
    <>
      <Button className={cls.button} onClick={load}>
        {length ? 'Обновить' : 'Загрузить'} пользователей
      </Button>
    </>
  )
}
