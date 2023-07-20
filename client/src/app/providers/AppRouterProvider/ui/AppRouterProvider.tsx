import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '../../../../shared/layout/ui/RootLayout'
import { HomePage } from '../../../../pages/HomePage/ui/HomePage'
import { StorePage } from '../../../../pages/StorePage/ui/StorePage'
import { UsersPage } from '../../../../pages/UsersPage/ui/UsersPage'

export const AppRouterProvider = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/store',
        element: <StorePage />,
      },
      {
        path: '/users',
        element: <UsersPage />,
      },
    ],
  },
])
