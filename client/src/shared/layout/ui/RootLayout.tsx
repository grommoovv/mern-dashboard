import { Outlet } from 'react-router'
import { Sidebar } from '../../../widgets/sidebar/ui/Sidebar'
import { FC } from 'react'
import { Header } from '../../../widgets/header/ui/Header'

export const RootLayout: FC = () => {
  return (
    <>
      <div className='__layout'>
        <Sidebar />
        <div className='page'>
          <Header />
          <main className='main'>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  )
}
