import { FC, useEffect, useState } from 'react'
import UserService from '../../model/service/UserService'
import { IUser } from '../../model/types/User'
import { UserElement } from '../UserElement/UserElement'
import cls from './UserList.module.scss'
import { AddUser } from '../../../../features/user/AddUser'
import { UserMarkup } from '../UserMarkup/UserMarkup'
import { Loader, Typography } from '../../../../shared/ui'
import { LoadUsers } from '../../../../features/user/LoadUsers/ui/LoadUsers'

export const UserList: FC = () => {
  const [isLoading, setLoading] = useState(false)
  const [users, setUsers] = useState<IUser[]>(() => {
    // Проверка наличия пользователей в localStorage

    const storage = localStorage.getItem('users')
    if (storage) {
      return JSON.parse(storage)
    } else {
      return []
    }
  })

  async function fetchUsers() {
    setLoading(true)
    try {
      const response = await UserService.fetchAllUsers()
      localStorage.setItem('users', JSON.stringify(response.data))
      setUsers(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className={cls.top}>
        <Typography tag='h1' className={cls.title}>
          Список пользователей
        </Typography>
        <div className={cls.actions}>
          <AddUser />
          <LoadUsers load={fetchUsers} length={users.length} />
        </div>
      </div>
      <UserMarkup />
      {isLoading && <Loader>Загрузка пользователей...</Loader>}
      {!isLoading && users && (
        <>
          <ul className={cls.list}>
            {users.map((user) => (
              <li className={cls.list__item} key={user.username}>
                <UserElement user={user} />
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  )
}
