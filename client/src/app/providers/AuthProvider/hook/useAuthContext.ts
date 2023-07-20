import { useContext } from 'react'
import { AuthContext } from '../model/context/AuthContext'

export const useAuthContext = () => useContext(AuthContext)
