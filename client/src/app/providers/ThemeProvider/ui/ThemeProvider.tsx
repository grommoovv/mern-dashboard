import { FC, ReactNode } from 'react'
import { ThemeContext } from '../model/context/ThemeContext'

interface Props {
  children: ReactNode
}

export const ThemeProvider: FC<Props> = ({ children }) => {
  const value = {}

  return (
    <>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </>
  )
}
