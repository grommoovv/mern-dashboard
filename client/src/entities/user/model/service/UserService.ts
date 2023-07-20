import $axios from '../../../../shared/api/api'
import { IUser } from '../types/User'

export default class UserService {
  static fetchAllUsers() {
    return $axios.get<IUser[]>('/users/get-users')
  }
}
