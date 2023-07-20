import { createContext } from 'react'
import { IThemeContext } from '../types/Theme.interface'

export const ThemeContext = createContext<IThemeContext>({})
