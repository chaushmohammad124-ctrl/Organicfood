import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Contact from './pages/Contact'

function App() {
  const location = useLocation()

  return (
    <>
      <div className="noiseLayer"></div>
      <div className="ambient-bg">
        <span className="blob blob-one"></span>
        <span className="blob blob-two"></span>
        <span className="blob blob-three"></span>
        <span className="blob blob-four"></span>
      </div>

      <Navbar />
      <CartDrawer />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  )
}

export default App
