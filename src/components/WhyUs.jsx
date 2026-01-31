export default function WhyUs() {
  return (
    <section id="why" className="bg-[#F2F2F3] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Заголовок */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#392325] mb-10 md:mb-16">
            Почему выбирают меня
          </h2>
          
          {/* Два блока с технологиями */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-12 md:mb-16">
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2C3E50] mb-4 md:mb-6">
                Современные технологии
              </h3>
              <p className="text-gray-600 text-base sm:text-lg">
                Использую технологии, которые сегодня востребованы на рынке: Vite, Tailwind, React, Node.js.
                Глубокое понимание фундаментальных принципов программирования.
              </p>
            </div>
            
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2C3E50] mb-4 md:mb-6">
                Практический подход
              </h3>
              <p className="text-gray-600 text-base sm:text-lg">
                Каждый изучаемый инструмент сразу применяю в реальных проектах, создавая работающие решения.
                Накопление портфолио и практического опыта.
              </p>
            </div>
          </div>
          
          {/* Блок с навыками */}
          <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#2C3E50] mb-8 md:mb-10">
              Ключевые навыки
            </h3>
            
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Vite', 'Vue.js', 'Git', 'Responsive Design'].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 
                           bg-[#F2F2F3] text-[#2C3E50] 
                           rounded-full text-sm sm:text-base md:text-lg font-medium 
                           border border-gray-300 
                           hover:bg-white hover:text-[#2C3E50] hover:border-[#2C3E50] 
                           hover:shadow-md md:hover:shadow-lg 
                           transition-all duration-300 ease-out 
                           transform hover:-translate-y-0.5 md:hover:-translate-y-1"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Отступ для футера */}
          <div className="h-12 sm:h-16 md:h-20 lg:h-24"></div>
        </div>
      </div>
    </section>
  )
}