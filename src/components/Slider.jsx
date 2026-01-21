import { useState } from 'react'

const projects = [
  { 
    id: 1, 
    title: 'BIO', 
    description: 'Я - Александр Хилкевич, студент 3 курса Коломенского колледжа по специальности "Информационные технологии и программирование". Моя специализация - фронтенд-разработка, создание современных и отзывчивых веб-интерфейсов. В процессе обучения я освоил базовые технологии веб-разработки и активно изучаю современный стек: HTML5, CSS3, JavaScript, Tailwind CSS, Vue, Vue.js и основы Node.js. Каждый день я совершенствую свои навыки, работаю над учебными проектами и практическими задачами.' 
  },
  { 
    id: 2, 
    title: 'Почему мы', 
    description: 'Вы получаете специалиста, который работает с современными технологиями, востребованными на рынке. Я использую актуальный стек: React с хуками и контекстом, TypeScript, Tailwind CSS и Vite — инструменты, которые сегодня применяются в реальных коммерческих проектах.' +
                '\n\n' +
                'Моя адаптивность — ваше преимущество. Как начинающий разработчик, я быстро обучаюсь и легко переключаюсь между задачами. Готов погружаться в проекты любой сложности, изучать новые технологии под конкретные нужды вашей команды.' +
                '\n\n' +
                'Сотрудничество со мной — это выгодные инвестиции. Моя мотивация набраться опыта позволяет предложить качественную работу по конкурентной цене. Я рассматриваю каждый проект как возможность профессионального роста, поэтому вкладываю максимум усилий.' +
                '\n\n' +
                'Вы получаете разработчика с актуальным образованием (3 курс IT-колледжа) и практическими навыками. Я не только пишу код, но и понимаю архитектурные принципы, слежу за лучшими практиками и готов внедрять их в ваши проекты с учетом последних трендов веб-разработки.'
  },
  { 
    id: 3, 
    title: 'Почему я', 
    description: 'Я получаю профильное образование в IT-сфере, что обеспечивает глубокое понимание фундаментальных принципов программирования, алгоритмов и архитектуры ПО, также работаю с современными инструментами разработки, которые используются в индустрии сегодня: Vite для сборки, Tailwind для стилей, Vue.js для создания интерфейсов. Каждый изученный инструмент я сразу применяю в реальных проектах, создавая работающие решения и накапливая портфолио.' 
  },
  { 
    id: 4, 
    title: 'Контакты', 
    description: ''
  },
]

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  return (
    <section className="pt-10 pb-8 bg-[#F2F2F3]"> 
      {/* Заголовок прижатый к шапке */}
      <div className="container mx-auto px-6">
        <p className="font-light text-center text-gray-600 mb-10 mt-0 text-xs">
          Frontend Developer & IT Student
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="relative max-w-4xl mx-auto">
          {/* Внутренний белый прямоугольник с текстом */}
          <div className="bg-white p-8 md:p-10 min-h-[420px] flex flex-col justify-center items-center">
            
            {/* Заголовок слайда */}
            <h3 className="text-4xl font-bold text-[#2C3E50] mb-8 text-center">
              {projects[currentIndex].title}
            </h3>
            
            {/* Белый прямоугольник с текстом (имитация фотографии) */}
            <div className="w-full max-w-3xl">
              <div className="bg-[#F2F2F3] border border-gray-200 shadow-sm p-6 md:p-8">
                <p className="text-gray-700 text-lg leading-relaxed text-justify">
                  {projects[currentIndex].description}
                </p>
              </div>
            </div>

            {/* Дополнительное пространство для визуального баланса */}
            <div className="mt-8"></div>
          </div>

          {/* Кнопки навигации */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-14 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 border-2 border-gray-300"
            aria-label="Previous project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-14 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 border-2 border-gray-300"
            aria-label="Next project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Индикаторы */}
          <div className="flex justify-center gap-3 mt-8 transition-colors ease-in-out duration-300">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'bg-[#2C3E50] scale-125 shadow-md' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}