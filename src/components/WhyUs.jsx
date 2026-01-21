export default function WhyMe() {
  return (
    <section id="why" className="min-h-screen bg-[#F2F2F3] py-16 flex items-center">
      <div className="w-full px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#392325] mb-16">
            Почему выбирают меня
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <div className="bg-white p-10 rounded-3xl shadow-xl h-full flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold text-[#2C3E50] mb-6">Современные технологии</h3>
              <p className="text-gray-600 text-lg flex-grow">
                Использую технологии, которые сегодня востребованы на рынке: Vite, Tailwind, React, Node.js.
                Глубокое понимание фундаментальных принципов программирования.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-xl h-full flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold text-[#2C3E50] mb-6">Практический подход</h3>
              <p className="text-gray-600 text-lg flex-grow">
                Каждый изучаемый инструмент сразу применяю в реальных проектах, создавая работающие решения.
                Накопление портфолио и практического опыта.
              </p>
            </div>
          </div>
          
          {/* Блок с навыками */}
          <div className="bg-white p-10 rounded-3xl shadow-xl">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-[#2C3E50] mb-10">
              Ключевые навыки
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Vite', 'Vue.js', 'Git', 'Responsive Design'].map((skill) => (
                <span 
                  key={skill}
                  className="px-6 py-3 bg-[#F2F2F3] text-[#2C3E50] rounded-full text-lg font-medium border border-gray-300 
                            hover:bg-white hover:text-[#2C3E50] hover:border-[#2C3E50] hover:shadow-lg 
                            transition-all duration-300 ease-out transform hover:-translate-y-1"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Пустой блок для разделения от Footer */}
          <div className="h-24 bg-transparent"></div>
        </div>
      </div>
    </section>
  )
}