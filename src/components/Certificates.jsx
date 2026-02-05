import { useState } from 'react';

const certificates = [
  {
    id: 1,
    title: 'WEB LOUNGE / HTML CSS JS',
    issuer: 'Stepik',
    date: '2025',
    description: 'Курс по современной фронтенд-разработке',
    skills: ['HTML5', 'CSS3', 'JavaScript'],
    image: null,
    pdf: '/certificates/stepik-certificate.pdf',
  },
  {
    id: 2,
    title: 'JavaScript Advanced',
    issuer: 'Stepik / freeCodeCamp',
    date: '2023',
    description: 'Продвинутый курс по JavaScript',
    image: null,
    skills: ['ES6+', 'Async/Await', 'DOM API', 'Web APIs'],
  },
  {
    id: 3,
    title: 'React & Redux',
    issuer: 'Udemy / Coursera',
    date: '2024',
    description: 'Разработка приложений на React с Redux',
    image: null,
    skills: ['React Hooks', 'Redux', 'React Router', 'Context API'],
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Сертификаты</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div 
              key={cert.id} 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-600 mb-2">{cert.issuer}  {cert.date}</p>
              <p className="text-gray-700 mb-4">{cert.description}</p>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
