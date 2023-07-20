import { createContext } from 'react'
import { IAuthContext } from '../types/Auth.interface'
import { IUser } from '../../../../../entities/user/model/types/User'

export const AuthContext = createContext<IAuthContext>({
  user: {} as IUser,
  isAuth: false,
  isLoading: false,
  checkAuth: () => {},
  register: () => {},
  login: () => {},
  logout: () => {},
})
