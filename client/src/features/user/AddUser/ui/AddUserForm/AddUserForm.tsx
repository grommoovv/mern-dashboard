import { FC } from 'react'
import { Input } from '../../../../../shared/ui'
import cls from './AddUserForm.module.scss'

export const AddUserForm: FC = () => {
  return (
    <>
      <form className={cls.form}>
        <label className={cls.label}>
          <div className={cls.text}>Имя пользователя</div>
          <Input
            className={cls.input}
            type='text'
            placeholder='Имя пользователя'
          />
        </label>
        <label className={cls.label}>
          <div className={cls.text}>Пароль</div>
          <Input className={cls.input} type='password' placeholder='Пароль' />
        </label>
        <label className={cls.label}>
          <div className={cls.text}>Роль</div>
          <select
            className={cls.select}
            name=''
            id=''
            defaultValue={'Выберите роль'}
          >
            <option value='default' disabled>
              Выберите роль
            </option>
            <option value='Admin'>Админ</option>
            <option value='User'>Пользователь</option>
          </select>
        </label>
      </form>
    </>
  )
}
