import { FC, ReactNode } from 'react'

import cls from './Modal.module.scss'
import { ModsType, classNames } from '../../lib/classNames/classNames'
import { Portal } from '../portal/Portal'

interface ModalProps {
  className?: string
  children: ReactNode
  isActive: boolean
  toggle: () => void
}

export const Modal: FC<ModalProps> = (props) => {
  const { children, className, isActive, toggle } = props

  const mods: ModsType = {
    [cls.active]: isActive,
  }

  const adds = [className]

  return (
    <>
      <Portal element={document.getElementById('root') ?? document.body}>
        <div className={classNames(cls.modal, mods, adds)} onClick={toggle}>
          <div
            className={cls.modal__content}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      </Portal>
    </>
  )
}
