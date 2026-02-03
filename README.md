# Портфолио Frontend-разработчика

[Демо](https://a-hil.github.io/My-landing-/)
Современное портфолио на React, Vite и Tailwind CSS.

## Установка и запуск
1. Клонируйте репозиторий
git clone https://github.com/A-hil/My-landing-.git
cd My-landing-
Установите зависимости

bash
npm install
Запустите в режиме разработки

bash
npm run dev
Откройте http://localhost:5173

Технологии
React 19
Vite
Tailwind CSS
GitHub Pages
GitHub Actions

Доступные команды
bash
npm run dev        # Запуск dev-сервера
npm run build      # Сборка для production
npm run lint       # Проверка ESLint
npm run deploy     # Деплой на GitHub Pages
Деплой
Проект автоматически деплоится при пуше в ветку main.

Для ручного деплоя:
bash
npm run build
npm run deploy
Структура проекта
text
public/              # Статические файлы
src/components/      # React компоненты
  Header.jsx         # Шапка сайта
  Slider.jsx         # Слайдер с информацией
  WhyUs.jsx          # Раздел "Почему я"
  Certificates.jsx   # Сертификаты
  Footer.jsx         # Подвал
.github/workflows/   # GitHub Actions
