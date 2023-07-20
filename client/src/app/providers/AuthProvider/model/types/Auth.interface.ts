import { IUser } from '../../../../../entities/user/model/types/User'

export interface IAuthContext {
  user: IUser | null
  isAuth: boolean
  isLoading: boolean
  checkAuth: () => void
  register: (username: string, password: string) => void
  login: (username: string, password: string) => void
  logout: () => void
}
