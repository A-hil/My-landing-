import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import WhyUs from './components/WhyUs'
import Footer from './components/Footer'


function App() {
  return (
    <div className="min-h-screen bg-[#F2F2F3]">
      <Header />
      <Slider />
      <WhyUs />
      <Footer />
      
    </div>
  )
}

export default App