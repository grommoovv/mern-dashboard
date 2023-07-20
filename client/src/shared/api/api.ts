import axios from 'axios'
import { IAuthResponse } from '../types/AuthResponse'

// dotenv.config({ path: '.env.dev' })

export const API_URL = `http://localhost:8080/api`

const $axios = axios.create({
  baseURL: API_URL,
  withCredentials: true,
})

$axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config
})

$axios.interceptors.response.use(
  (config) => {
    return config
  },
  async (error) => {
    const originalRequest = error.config
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true
      try {
        const response = await axios.get<IAuthResponse>(
          `${API_URL}/auth/refresh`,
          { withCredentials: true }
        )
        localStorage.setItem('token', response.data.accessToken)
        return $axios.request(originalRequest)
      } catch (error) {
        console.log('Пользователь не авторизован')
      }
    }
    throw error
  }
)

export default $axios
