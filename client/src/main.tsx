import { createRoot } from 'react-dom/client'
import { AuthProvider } from './app/providers/AuthProvider'
import { ThemeProvider } from './app/providers/ThemeProvider'
import { ModalProvider } from './app/providers/ModalProvider'

import { App } from './app/App'
import './app/styles/styles.scss'

createRoot(document.getElementById('root') as HTMLElement).render(
  <AuthProvider>
    <ThemeProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </ThemeProvider>
  </AuthProvider>
)
