import { useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { Menu, X, ShoppingCart, Sprout, Search, PhoneCall } from 'lucide-react'
import { useCart } from '../context/CartContext'
import '../styles/navbar.css'

function Navbar() {
  const [open, setOpen] = useState(false)
  const { totalItems, setIsCartOpen } = useCart()
  const navigate = useNavigate()

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={() => setOpen(false)}>
        <span className="logoIcon"><Sprout size={25} /></span>
        <span>Organic Food</span>
      </Link>

      <div className={open ? "navLinks active" : "navLinks"}>
        <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
        <NavLink to="/products" onClick={() => setOpen(false)}>Products</NavLink>
        <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
      </div>

      <div className="navRight">
        <button className="navPill" onClick={() => navigate('/contact')}>
  <PhoneCall size={17} /> Order Help
</button>

<button className="circleBtn" onClick={() => navigate('/products')}>
  <Search size={19} />
</button>
        <button className="cartBtn" onClick={() => setIsCartOpen(true)}>
          <ShoppingCart size={20} />
          {totalItems > 0 && <span>{totalItems}</span>}
        </button>
        <button className="menuBtn" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar


// enhance this code mke it look like professhionl mke it compct simplify the code lso mke this resposve to mobile nd smiler devices 