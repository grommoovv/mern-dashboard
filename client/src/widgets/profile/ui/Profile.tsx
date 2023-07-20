import { useAuthContext } from '../../../app/providers/AuthProvider'
import cls from './Profile.module.scss'

export const Profile = () => {
  const { user } = useAuthContext()

  return (
    <>
      <div className={cls.profile}>
        <div className={cls.avatar}></div>
        <div className={cls.info}>
          <div className={cls.name}>{user?.username}</div>
          <div className={cls.role}>Admin</div>
        </div>
      </div>
    </>
  )
}
