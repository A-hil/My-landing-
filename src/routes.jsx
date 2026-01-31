
import { createBrowserRouter } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import Certificates from './pages/Certificates'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'contacts',
        element: <Contacts />
      },
      {
        path: 'certificates',
        element: <Certificates />
      }
    ]
  }
])