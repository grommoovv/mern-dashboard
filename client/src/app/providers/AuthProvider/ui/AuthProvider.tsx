import { FC, ReactNode, useState } from 'react'
import { AuthContext } from '../model/context/AuthContext'
import axios from 'axios'
import AuthService from '../model/service/AuthService'
import { IAuthResponse } from '../../../../shared/types/AuthResponse'
import { IUser } from '../../../../entities/user/model/types/User'
import { API_URL } from '../../../../shared/api/api'

interface Props {
  children: ReactNode
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const [isLoading, setLoading] = useState(false)
  const [user, setUser] = useState<IUser | null>(null)
  const [isAuth, setAuth] = useState(false)

  const checkAuth = async () => {
    setLoading(true)
    try {
      const response = await axios.get<IAuthResponse>(
        `${API_URL}/auth/refresh`,
        {
          withCredentials: true,
        }
      )

      console.log(response)

      localStorage.setItem('token', response.data.accessToken)
      setUser(response.data.user)
      setAuth(true)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const register = async (username: string, password: string) => {
    try {
      const response = await AuthService.register(username, password)
      console.log(response)

      localStorage.setItem('token', response.data.accessToken)
      setUser(response.data.user)
      setAuth(true)
    } catch (error) {
      console.log(error)

      // console.log(error.response?.data?.message)
    }
  }

  const login = async (username: string, password: string) => {
    try {
      const response = await AuthService.login(username, password)
      console.log(response)

      localStorage.setItem('token', response.data.accessToken)
      setUser(response.data.user)
      setAuth(true)
    } catch (error) {
      console.log(error)

      // console.log(error.response?.data?.message)
    }
  }

  const logout = async () => {
    try {
      localStorage.removeItem('token')
      setUser({} as IUser)
      setAuth(false)
    } catch (error) {
      console.log(error)

      // console.log(error.response?.data?.message)
    }
  }

  const value = { isLoading, user, isAuth, checkAuth, register, login, logout }

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  )
}
