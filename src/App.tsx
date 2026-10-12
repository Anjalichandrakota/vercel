import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import { LoginPage, RegisterPage, ForgotPasswordPage } from './pages/AuthPages'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="*" element={<LandingPage />} />
    </Routes>
  )
}