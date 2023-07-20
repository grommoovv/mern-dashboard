import { FC } from 'react'
import cls from './Sidebar.module.scss'
import { Link, useLocation } from 'react-router-dom'
import { useAuthContext } from '../../../app/providers/AuthProvider'
import { Button } from '../../../shared/ui/button/Button'

const routes = [
  {
    id: 1,
    display: 'Главная',
    url: '/',
  },
  {
    id: 2,
    display: 'Управление складом',
    url: '/store',
  },
  {
    id: 3,
    display: 'Управление пользователями',
    url: '/users',
  },
]

export const Sidebar: FC = () => {
  const { pathname: path } = useLocation()
  const { logout } = useAuthContext()

  return (
    <>
      <aside className={cls.sidebar}>
        <div className={cls.sidebar__wrap}>
          <div className={cls.logo}>Dashboard</div>
          <nav className={cls.nav}>
            {routes.map((route) => (
              <Link
                className={`${cls.nav__link} ${
                  route.url === path ? `${cls.current}` : ``
                }`}
                to={route.url}
                key={route.id}
              >
                {route.display}
              </Link>
            ))}
          </nav>

          <Button className={cls.button} onClick={() => logout()}>
            Выйти
          </Button>
        </div>
      </aside>
    </>
  )
}
