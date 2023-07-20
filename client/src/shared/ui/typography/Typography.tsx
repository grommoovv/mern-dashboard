import { FC, ReactNode } from 'react'
import cls from './Typography.module.scss'
import { classNames } from '../../lib/classNames/classNames'

interface TypographyProps {
  tag: 'h1' | 'h2' | 'h3' | 'p'
  children: ReactNode
  className?: string
}

export const Typography: FC<TypographyProps> = (props) => {
  const { tag, children, className } = props

  switch (tag) {
    case 'h1':
      return <h1 className={classNames(cls.h1, {}, [className])}>{children}</h1>
    case 'h2':
      return <h2 className={classNames(cls.h2, {}, [className])}>{children}</h2>
    case 'h3':
      return <h3 className={classNames(cls.h3, {}, [className])}>{children}</h3>
    case 'p':
      return <p className={classNames(cls.p, {}, [className])}>{children}</p>

    default:
      return <></>
  }
}
