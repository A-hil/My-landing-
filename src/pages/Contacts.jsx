// src/pages/Contacts.jsx
import { useState } from 'react'

export default function Contacts() {
  const [copied, setCopied] = useState('')

  const contacts = [
    {
      type: 'Telegram',
      value: '@Sanchoezzz',
      link: 'https://t.me/Sanchoezzz',
      icon: '📱'
    },
    {
      type: 'Email',
      value: 'hilevro@gmail.com',
      link: 'mailto:hilevro@gmail.com',
      icon: '✉️'
    },
    {
      type: 'GitHub',
      value: 'https://github.com/A-hil',
      link: 'https://github.com/A-hil',
      icon: '💻'
    },
    {
      type: 'Телефон',
      value: '+7 (915) 377-68-55',
      link: 'tel:+79153776855',
      icon: '📞'
    }
  ]

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(type)
      setTimeout(() => setCopied(''), 2000)
    } catch (err) {
      console.error('Ошибка копирования:', err)
    }
  }

  return (
    <section className="pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#392325] mb-12 text-center">
          Контакты
        </h1>
        
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contacts.map((contact) => (
              <div 
                key={contact.type}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => window.open(contact.link, '_blank')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">{contact.icon}</span>
                    <div>
                      <h3 className="font-bold text-lg text-[#2C3E50]">{contact.type}</h3>
                      <p className="text-gray-600">{contact.value}</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleCopy(contact.value, contact.type)
                    }}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    title="Скопировать"
                  >
                    {copied === contact.type ? (
                      <span className="text-green-600">✓</span>
                    ) : (
                      <span>📋</span>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-[#F2F2F3] rounded-xl">
            <h3 className="text-xl font-bold text-[#2C3E50] mb-4">Свяжитесь со мной</h3>
            <p className="text-gray-600">
              Открыт к предложениям о стажировке, проектной работе или сотрудничестве. 
              Отвечаю быстро в Telegram или на почту.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}