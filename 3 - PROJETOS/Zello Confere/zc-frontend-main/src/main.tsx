import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { CadastroProvider } from './store/cadastroStore'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CadastroProvider>
        <App />
      </CadastroProvider>
    </BrowserRouter>
  </StrictMode>,
)
