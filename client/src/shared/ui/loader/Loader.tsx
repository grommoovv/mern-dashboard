import { FC, ReactNode } from 'react'
import cls from './Loader.module.scss'

interface LoaderProps {
  children: ReactNode
}

export const Loader: FC<LoaderProps> = ({ children }) => {
  return (
    <>
      <div className={cls.loader}>{children}</div>
    </>
  )
}
