import { IUser } from '../../entities/user/model/types/User'

export interface IAuthResponse {
  accessToken: string
  refreshToken: string
  user: IUser
}
