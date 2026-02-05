export default function Header() {
  return (
    
    <header className="fixed top-0 left-0 right-0 bg-[#392325] backdrop-blur-md z-50 border-b border-gray-200 py-3">
      <div className="w-full px-6">
        {/* ДЕСКТОПНАЯ ВЕРСИЯ */}
        <div className="hidden md:grid grid-cols-3 items-center gap-4">
          <nav className="flex justify-start space-x-8">
            <a href="#about" className="text-white hover:text-gray-300 transition text-sm tracking-wide whitespace-nowrap">
              Обо мне
            </a>
            <a href="#why" className="text-white hover:text-gray-300 transition text-sm tracking-wide whitespace-nowrap">
              Почему мы
            </a>
            <a href="#certificates" className="text-white  hover:text-gray-300 transition text-sm tracking-wide whitespace-nowrap">
              Сертификаты
            </a>
          </nav>
          
          <div className="flex justify-center">
            <a href="#">
              <h1 className="text-xl md:text-2xl font-light text-white tracking-widest uppercase font-['Helvetica'] text-center hover:text-gray-300 transition">
                ALEXANDER KHILKEVICH
              </h1>
            </a>
          </div>
        </div>
        
        {/* МОБИЛЬНАЯ ВЕРСИЯ */}
        <div className="md:hidden flex flex-col items-center space-y-3 py-2">
          <a href="#">
            <h1 className="text-3xl font-light text-white tracking-widest uppercase font-['Helvetica'] text-center hover:text-gray-300 transition">
              ALEXANDER KHILKEVICH
            </h1>
          </a>
          <nav className="flex space-x-6">
            <a href="#about" className="text-white hover:text-gray-300 transition text-sm tracking-wide">
              Обо мне
            </a>
            <a href="#why" className="text-white hover:text-gray-300 transition text-sm tracking-wide">
              Почему мы
            </a>
            <a href="#certificates" className="text-white hover:text-gray-300 transition text-sm tracking-wide">
              Сертификаты
            </a>
          </nav>
        </div>
        
      </div>
    </header>
  )
}