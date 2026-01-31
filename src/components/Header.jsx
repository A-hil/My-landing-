// src/components/Header.jsx
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#392325] backdrop-blur-md z-50 border-b border-gray-200 py-3">
      <div className="w-full px-6">
        <div className="hidden md:grid grid-cols-3 items-center gap-4">
          <nav className="flex justify-start space-x-8">
            <Link 
              to="/about" 
              className="text-white hover:text-gray-300 transition text-sm tracking-wide whitespace-nowrap"
            >
              Обо мне
            </Link>
            <Link 
              to="/projects" 
              className="text-white hover:text-gray-300 transition text-sm tracking-wide whitespace-nowrap"
            >
              Проекты
            </Link>
            <Link 
              to="/contacts" 
              className="text-white hover:text-gray-300 transition text-sm tracking-wide whitespace-nowrap"
            >
              Контакты
            </Link>
            <Link 
              to="/certificates" 
              className="text-white hover:text-gray-300 transition text-sm tracking-wide whitespace-nowrap"
            >
              Сертификаты
            </Link>
          </nav>
          
          <div className="flex justify-center">
            <Link to="/">
              <h1 className="text-xl md:text-2xl font-light text-white tracking-widest uppercase font-['Helvetica'] text-center hover:text-gray-300 transition">
                ALEXANDER KHILKEVICH
              </h1>
            </Link>
          </div>
        </div>
        
        <div className="md:hidden flex flex-col items-center space-y-3 py-2">
          <Link to="/">
            <h1 className="text-3xl font-light text-white tracking-widest uppercase font-['Helvetica'] text-center hover:text-gray-300 transition">
              ALEXANDER KHILKEVICH
            </h1>
          </Link>
          <nav className="flex space-x-6">
            <Link to="/about" className="text-white hover:text-gray-300 transition text-sm tracking-wide">
              Обо мне
            </Link>
            <Link to="/projects" className="text-white hover:text-gray-300 transition text-sm tracking-wide">
              Проекты
            </Link>
            <Link to="/contacts" className="text-white hover:text-gray-300 transition text-sm tracking-wide">
              Контакты
            </Link>
            <Link to="/certificates" className="text-white hover:text-gray-300 transition text-sm tracking-wide">
              Сертификаты
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}