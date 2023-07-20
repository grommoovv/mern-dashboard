import { FC, useEffect } from 'react'
import { useAuthContext } from './providers/AuthProvider'
import { RouterProvider } from 'react-router'
import { AppRouterProvider } from './providers/AppRouterProvider/ui/AppRouterProvider'
import { LoginPage } from '../pages/LoginPage/ui/LoginPage'

export const App: FC = () => {
  const { checkAuth, isAuth, isLoading } = useAuthContext()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      checkAuth()
    }
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!isAuth) {
    return <LoginPage />
  }

  return (
    <>
      <RouterProvider router={AppRouterProvider} />
    </>
  )
}
