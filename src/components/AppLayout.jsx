// src/components/AppLayout.jsx
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow">
        <Outlet /> {/* Здесь будут рендериться страницы */}
      </main>
      <Footer />
    </div>
  )
}