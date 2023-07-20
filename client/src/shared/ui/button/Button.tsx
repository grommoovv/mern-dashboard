import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import { ModsType, classNames } from '../../lib/classNames/classNames'
import cls from './Button.module.scss'

type ButtonTheme = 'outlined' | 'filled' | 'clear'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  theme?: ButtonTheme
  className?: string
  fullWidth?: boolean
  rounded?: boolean
  disabled?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    theme = 'clear',
    disabled,
    rounded,
    fullWidth,
    ...rest
  } = props

  const mods: ModsType = {
    [cls.rounded]: rounded,
    [cls.fullWidth]: fullWidth,
    [cls.disabled]: disabled,
  }

  const adds = [className, cls[theme]]

  return (
    <>
      <button className={classNames(cls.button, mods, adds)} {...rest}>
        {children}
      </button>
    </>
  )
}
