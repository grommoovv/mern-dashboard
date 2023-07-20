import { Profile } from '../../profile/ui/Profile'
import cls from './Header.module.scss'

export const Header = () => {
  return (
    <>
      <header className={cls.header}>
        <div className={cls.header__wrap}>
          Header
          <Profile />
        </div>
      </header>
    </>
  )
}
