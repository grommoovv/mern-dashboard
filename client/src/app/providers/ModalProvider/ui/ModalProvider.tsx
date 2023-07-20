import { FC, ReactNode, useState } from 'react'
import { ModalContext } from '../model/context/ModalContext'

interface Props {
  children: ReactNode
}

export const ModalProvider: FC<Props> = ({ children }) => {
  const [isActive, setActive] = useState(false)

  const handleToggleModal = () => {
    setActive((prev) => !prev)
  }

  const value = { isActive, handleToggleModal }

  return (
    <>
      <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
    </>
  )
}
