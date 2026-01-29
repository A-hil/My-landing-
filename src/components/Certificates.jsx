// src/components/Certificates.jsx
import { useState } from 'react'


const certificates = [
  {
    id: 1,
    title: 'WEB LOUNGE / HTML CSS JS',
    issuer: 'Stepik',
    date: '2025',
    description: 'Курс по современной фронтенд-разработке',
    skills: ['HTML5', 'CSS3', 'JavaScript'],
    image: '/Сертификат1.png',
    pdf: '/certificates/stepik-certificate.pdf', 
  },
  
  {
    id: 2,
    title: 'JavaScript Advanced',
    issuer: 'Stepik / freeCodeCamp',
    date: '2023',
    description: 'Продвинутый курс по JavaScript',
    image: '/certificates/js-cert.jpg',
    skills: ['ES6+', 'Async/Await', 'DOM API', 'Web APIs']
  },
  {
    id: 3,
    title: 'React & Redux',
    issuer: 'Udemy / Coursera',
    date: '2024',
    description: 'Разработка приложений на React с Redux',
    image: '/certificates/react-cert.jpg',
    skills: ['React Hooks', 'Redux', 'React Router', 'Context API']
  }
]

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null)

  // ⬇⬇⬇⬇⬇ ДОБАВЬТЕ ЗДЕСЬ ⬇⬇⬇⬇⬇
  
  // Функция для открытия оригинала
  const handleOpenOriginal = () => {
    if (!selectedCert) return
    
    if (selectedCert.pdf) {
      // Если есть PDF - открываем в новой вкладке
      window.open(selectedCert.pdf, '_blank', 'noopener,noreferrer')
    } else if (selectedCert.image) {
      // Если есть изображение - открываем изображение
      window.open(selectedCert.image, '_blank', 'noopener,noreferrer')
    } else {
      // Если ничего нет - просто закрываем модалку
      setSelectedCert(null)
    }
  }

  // Функция для скачивания PDF
  const handleDownloadPDF = () => {
    if (!selectedCert?.pdf) {
      // Если PDF нет, но есть изображение - предлагаем скачать изображение
      if (selectedCert?.image) {
        const link = document.createElement('a')
        link.href = selectedCert.image
        link.download = `${selectedCert.title.replace(/\s+/g, '_')}.jpg`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
      return
    }
    
    // Создаем ссылку для скачивания PDF
    const link = document.createElement('a')
    link.href = selectedCert.pdf
    link.download = `${selectedCert.title.replace(/\s+/g, '_')}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="certificates" className="py-16 bg-white">
      <div className="w-full px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Заголовок секции */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#392325] mb-4">
              Сертификаты
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Подтвержденные знания и пройденные курсы в области веб-разработки
            </p>
          </div>

          {/* Сетка сертификатов */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert) => (
              <div 
                key={cert.id}
                className="bg-[#F2F2F3] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 cursor-pointer"
                onClick={() => setSelectedCert(cert)}
              >
                
                {/* Заголовок сертификата */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[#2C3E50] mb-2">
                    {cert.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span className="font-medium">{cert.issuer}</span>
                    <span className="bg-[#2C3E50] text-white px-3 py-1 rounded-full">
                      {cert.date}
                    </span>
                  </div>
                </div>

       {/* Изображение сертификата */}
<div className="mb-6 bg-white rounded-xl p-4 flex items-center justify-center h-48 border border-gray-300 overflow-hidden relative">
  {cert.image ? (
    <img 
      src={cert.image}  
      alt={`Сертификат: ${cert.title}`} 
      className="absolute inset-0 w-full h-full object-contain rounded-lg" 
      onError={(e) => {
        e.target.style.display = 'none'; // Скрыть если ошибка загрузки
      }}
    />
  ) : (
    /* Заглушка если изображения нет */
    <div className="text-center relative z-10 bg-white/90 p-4 rounded-lg">
      <div className="w-16 h-16 bg-[#2C3E50] text-white rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <p className="text-gray-500">Сертификат</p>
      <p className="text-sm text-gray-400 mt-1">Нажмите для просмотра</p>
    </div>
  )}
</div>

                {/* Описание */}
                <p className="text-gray-600 mb-6">
                  {cert.description}
                </p>

                {/* Навыки */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-white text-[#2C3E50] text-sm rounded-full border border-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Кнопка "Загрузить все" */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-[#2C3E50] text-white font-medium rounded-lg hover:bg-[#1a2530] transition-colors duration-300">
              Загрузить все сертификаты
            </button>
          </div>

          {/* Модальное окно для просмотра сертификата */}
          {selectedCert && (
            <div 
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedCert(null)}
            >
              <div 
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  {/* Заголовок модалки */}
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-[#2C3E50]">
                      {selectedCert.title}
                    </h3>
                    <button 
                      onClick={() => setSelectedCert(null)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Контент модалки */}
                  <div className="grid md:grid-cols-2 gap-8">
  {/* Изображение сертификата - СУПЕР ПРОСТО */}
  <div className="bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
    <img 
      src={selectedCert?.image || "/placeholder-cert.jpg"} 
      alt={selectedCert?.title || "Сертификат"}
      className="w-full h-auto max-h-96 object-contain"
    />
    
  </div>

                    {/* Детали сертификата */}
                    <div>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-gray-500">Организация</p>
                          <p className="text-lg font-medium text-[#2C3E50]">{selectedCert.issuer}</p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-500">Дата получения</p>
                          <p className="text-lg font-medium text-[#2C3E50]">{selectedCert.date}</p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-500">Описание</p>
                          <p className="text-gray-600">{selectedCert.description}</p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-500 mb-2">Приобретенные навыки</p>
                          <div className="flex flex-wrap gap-2">
                            {selectedCert.skills.map((skill, index) => (
                              <span 
                                key={index}
                                className="px-3 py-1 bg-[#F2F2F3] text-[#2C3E50] text-sm rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                     {/* Кнопки действий */}
<div className="mt-8 flex flex-col sm:flex-row gap-3">
  {/* Кнопка "Открыть оригинал" */}
  <button 
    onClick={handleOpenOriginal}
    className="px-6 py-3 bg-[#2C3E50] text-white rounded-lg hover:bg-[#1a2530] transition-colors flex-1 flex items-center justify-center gap-2"
  >
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
    Открыть оригинал
  </button>
  
  {/* Кнопка "Скачать PDF" - показывается только если есть PDF */}
  {selectedCert.pdf && (
    <button 
      onClick={handleDownloadPDF}
      className="px-6 py-3 border border-[#2C3E50] text-[#2C3E50] rounded-lg hover:bg-[#F2F2F3] transition-colors flex-1 flex items-center justify-center gap-2"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      Скачать PDF
    </button>
  )}
  
  {/* Кнопка "Скачать изображение" - если нет PDF, но есть изображение */}
  {!selectedCert.pdf && selectedCert.image && (
    <button 
      onClick={handleDownloadPDF}
      className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors flex-1 flex items-center justify-center gap-2"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      Скачать изображение
    </button>
  )}
</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}