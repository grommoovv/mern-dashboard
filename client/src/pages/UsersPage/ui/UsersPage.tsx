import { FC, useState } from 'react'
import { UserList } from '../../../entities/user/ui/UserList/UserList'
import UserService from '../../../entities/user/model/service/UserService'
import { IUser } from '../../../entities/user/model/types/User'

export const UsersPage: FC = () => {
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
      <div>
        <UserList />
      </div>
    </>
  )
}
