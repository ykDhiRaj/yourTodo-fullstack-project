import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TodoContextProvider } from './context/TodosContext.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <TodoContextProvider>
            <App />
      </TodoContextProvider>
    </AuthContextProvider>
  </StrictMode>,
)
