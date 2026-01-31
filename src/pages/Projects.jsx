// src/pages/Projects.jsx
export default function Projects() {
  const projects = [
    {
      title: 'Сайт-визитка',
      description: 'Текущий проект - адаптивный сайт-портфолио на React и Tailwind CSS',
      technologies: ['React', 'Tailwind CSS', 'Vite', 'React Router'],
      link: '/'
    },
    {
      title: 'TODO приложение',
      description: 'Приложение для управления задачами с локальным хранилищем',
      technologies: ['React', 'LocalStorage', 'CSS Modules'],
      link: '#'
    }
  ]

  return (
    <section className="pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#392325] mb-12 text-center">
          Мои проекты
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-[#F2F2F3] text-[#2C3E50] text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <button 
                onClick={() => window.open(project.link, '_blank')}
                className="px-6 py-3 bg-[#2C3E50] text-white rounded-lg hover:bg-[#1a2530] transition-colors"
              >
                Посмотреть проект
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Больше проектов доступно на моем <a href="https://github.com/A-hil" className="text-[#2C3E50] underline">GitHub</a>
          </p>
        </div>
      </div>
    </section>
  )
}