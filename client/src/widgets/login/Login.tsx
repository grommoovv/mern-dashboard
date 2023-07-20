import { FC, useState } from 'react'
import cls from './Login.module.scss'
import { useAuthContext } from '../../app/providers/AuthProvider'

export const Login: FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { login } = useAuthContext()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
  }

  return (
    <>
      <form className={cls.form} onSubmit={handleSubmit}>
        <div className={cls.wrap}>
          <input
            className={cls.input}
            type='text'
            placeholder='Имя пользователя'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className={cls.input}
            type='password'
            placeholder='Пароль'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className={cls.button}
            onClick={() => login(username, password)}
          >
            Войти
          </button>
        </div>
      </form>
    </>
  )
}
