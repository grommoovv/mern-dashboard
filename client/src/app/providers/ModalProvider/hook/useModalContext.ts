import { useContext } from 'react'
import { ModalContext } from '../model/context/ModalContext'

export const useModalContext = () => useContext(ModalContext)
