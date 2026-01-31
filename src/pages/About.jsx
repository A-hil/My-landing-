// src/pages/About.jsx
export default function About() {
  return (
    <section className="pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#392325] mb-8 text-center">
          Обо мне
        </h1>
        
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <p className="text-lg text-gray-700 leading-relaxed">
            Я - Александр Хилкевич, студент 3 курса Коломенского колледжа по специальности 
            "Информационные технологии и программирование". Моя специализация - фронтенд-разработка, 
            создание современных и отзывчивых веб-интерфейсов.
          </p>
          
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">Образование</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#2C3E50] rounded-full mt-2 mr-3"></span>
                  <span>Коломенский колледж, 3 курс</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#2C3E50] rounded-full mt-2 mr-3"></span>
                  <span>Специальность: Информационные технологии и программирование</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">Цели</h3>
              <p className="text-gray-600">
                Стремлюсь стать профессиональным фронтенд-разработчиком, 
                работать над интересными проектами и постоянно развиваться в IT-сфере.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}