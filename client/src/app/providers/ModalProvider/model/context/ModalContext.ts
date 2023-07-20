import { createContext } from 'react'
import { IModalContext } from '../types/Modal.interface'

export const ModalContext = createContext<IModalContext>({
  isActive: false,
  handleToggleModal: () => {},
})
