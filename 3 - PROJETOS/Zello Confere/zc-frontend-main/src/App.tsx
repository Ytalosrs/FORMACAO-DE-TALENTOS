import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import { PainelPage } from './pages/PainelPage'
import { CadastroPage } from './pages/CadastroPage'
import { PerfilPage } from './pages/PerfilPage'
import { PlaceholderPage } from './pages/PlaceholderPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/inicio" element={<PainelPage />} />
      <Route path="/cadastro" element={<CadastroPage />} />
      <Route path="/perfil" element={<PerfilPage />} />
      <Route path="/criar-conta" element={<PlaceholderPage title="Criar conta" />} />
      <Route path="/recuperar-senha" element={<PlaceholderPage title="Recuperar senha" />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
