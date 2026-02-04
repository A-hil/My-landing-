import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'BIO',
    description:
      'Я - Александр Хилкевич, студент 3 курса Коломенского колледжа по специальности "Информационные технологии и программирование". Моя специализация - фронтенд-разработка, создание современных и отзывчивых веб-интерфейсов. В процессе обучения я освоил базовые технологии веб-разработки и активно изучаю современный стек: HTML5, CSS3, JavaScript, Tailwind CSS, React, React и основы Node.js. Каждый день я совершенствую свои навыки, работаю над учебными проектами и практическими задачами.',
  },
  {
    id: 2,
    title: 'Почему мы',
    description:
      'Вы получаете специалиста, который работает с современными технологиями, востребованными на рынке. Я использую актуальный стек: React с хуками и контекстом, TypeScript, Tailwind CSS и Vite — инструменты, которые сегодня применяются в реальных коммерческих проектах.' +
      '\n\n' +
      'Моя адаптивность — ваше преимущество. Как начинающий разработчик, я быстро обучаюсь и легко переключаюсь между задачами. Готов погружаться в проекты любой сложности, изучать новые технологии под конкретные нужды вашей команды.' +
      '\n\n',
  },
  {
    id: 3,
    title: 'Почему я',
    description:
      'Я получаю профильное образование в IT-сфере, что обеспечивает глубокое понимание фундаментальных принципов программирования, алгоритмов и архитектуры ПО, также работаю с современными инструментами разработки, которые используются в индустрии сегодня: Vite для сборки, Tailwind для стилей, React для создания интерфейсов. Каждый изученный инструмент я сразу применяю в реальных проектах, создавая работающие решения и накапливая портфолио.',
  },
  {
    id: 4,
    title: 'Контакты',
    description: '',
    isContacts: true, // ← ЭТО ВАЖНО
  },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copied, setCopied] = useState('');

  const nextSlide = () => {
    setCurrentIndex(prev => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(''), 2000);
    } catch (err) {
      console.error('Ошибка копирования:', err);
    }
  };

  const contacts = [
    {
      id: 1,
      type: 'Telegram',
      value: '@Sanchoezzz',
      link: 'https://t.me/Sanchoezzz',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.152c.167-.122.384-.152.584-.091.201.061.362.213.425.413.031.091.031.182.031.273v7.668c0 .122-.03.243-.091.334-.092.152-.243.273-.425.334-.152.061-.304.061-.456 0l-2.132-.729-1.215 1.154c-.122.122-.274.152-.426.152-.152 0-.304-.061-.426-.152l-1.154-1.154-3.942 2.436c-.122.061-.243.091-.364.091-.122 0-.243-.03-.365-.091-.183-.061-.334-.213-.395-.395-.061-.182-.061-.364 0-.546l.971-3.972-3.972-.971c-.182-.061-.334-.213-.395-.395-.061-.182-.061-.364 0-.546.061-.183.213-.334.395-.395l15.202-4.438c.122-.03.243-.03.365-.03.152 0 .304.03.426.091z" />
        </svg>
      ),
      color: 'bg-blue-100 text-blue-700 border-blue-300 hover:bg-blue-200',
    },
    {
      id: 2,
      type: 'Email',
      value: 'hilevro@gmail.com',
      link: 'mailto:hilevro@gmail.com',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      color: 'bg-red-100 text-red-700 border-red-300 hover:bg-red-200',
    },
    {
      id: 3,
      type: 'GitHub',
      value: 'https://github.com/A-hil',
      link: 'https://github.com/A-hil',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
          />
        </svg>
      ),
      color: 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200',
    },
    {
      id: 4,
      type: 'Телефон',
      value: '+7 (915) 377-68-55',
      link: 'tel:+79153776855',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      color: 'bg-green-100 text-green-700 border-green-300 hover:bg-green-200',
    },
  ];

  return (
    <section className="pt-10 pb-8 bg-[#F2F2F3]">
      <div className="container mx-auto px-6">
        <p className="font-light text-center text-gray-600 mb-10 mt-0 text-xs">
          Frontend Developer & IT Student
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-10 min-h-105 flex flex-col justify-center items-center">
            <h3 className="text-4xl font-bold text-[#2C3E50] mb-8 text-center">
              {projects[currentIndex].title}
            </h3>

            <div className="w-full max-w-3xl">
              {projects[currentIndex].isContacts ? (
                <div className="bg-[#F2F2F3] border border-gray-200 shadow-sm p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {contacts.map(contact => (
                      <div
                        key={contact.id}
                        className={`border rounded-lg p-4 flex items-center justify-between transition-all duration-300 hover:shadow-md cursor-pointer ${contact.color}`}
                        onClick={() => window.open(contact.link, '_blank')}
                      >
                        <div className="flex items-center space-x-4">
                          <div className="p-2 bg-white rounded-lg shadow-sm">
                            {contact.icon}
                          </div>
                          <div>
                            <p className="font-semibold">{contact.type}</p>
                            <p className="text-sm opacity-80">
                              {contact.value}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={e => {
                            e.stopPropagation();
                            handleCopy(contact.value, contact.type);
                          }}
                          className="p-2 hover:bg-white/50 rounded-lg transition-colors"
                          title="Скопировать"
                        >
                          {copied === contact.type ? (
                            <svg
                              className="w-5 h-5 text-green-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                              />
                            </svg>
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-[#F2F2F3] border border-gray-200 shadow-sm p-6 md:p-8">
                  <p className="text-gray-700 text-lg leading-relaxed text-justify whitespace-pre-line">
                    {projects[currentIndex].description}
                  </p>
                </div>
              )}
            </div>
            <div className="mt-8"></div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-14 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 border-2 border-gray-300"
            aria-label="Previous project"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-14 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 border-2 border-gray-300"
            aria-label="Next project"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
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
  );
}
