const UserModel = require('../../../models/UserModel')

class UserService {
  // логика получения всех пользователей
  async getAllUsers() {
    const users = await UserModel.find()
    return users
  }

  // логика создания пользователя
  async createUser() {
    const users = await UserModel.create()
    return users
  }
}

module.exports = new UserService()
