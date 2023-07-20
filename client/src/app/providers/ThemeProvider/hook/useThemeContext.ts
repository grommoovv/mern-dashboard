import { useContext } from 'react'
import { ThemeContext } from '../model/context/ThemeContext'

export const useThemeContext = () => useContext(ThemeContext)
