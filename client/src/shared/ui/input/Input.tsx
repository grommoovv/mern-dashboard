import { FC, InputHTMLAttributes } from 'react'
import cls from './Input.module.scss'
import { ModsType, classNames } from '../../lib/classNames/classNames'
import useInput from '../../hooks/useInput/useInput'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export const Input: FC<InputProps> = (props) => {
  const { className, ...rest } = props

  const inputProps = useInput('')

  const mods: ModsType = {}

  const adds = [className]

  return (
    <>
      <input
        className={classNames(cls.input, mods, adds)}
        {...inputProps}
        {...rest}
      />
    </>
  )
}
