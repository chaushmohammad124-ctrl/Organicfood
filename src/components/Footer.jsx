import { Leaf, Mail, MapPin, Phone } from 'lucide-react'
import '../styles/footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footerGlow"></div>

      <div className="footerGrid">
        <div>
          <h2><Leaf /> Organic Food</h2>
          <p>Company-ready organic food website with premium freshness, fast delivery, and modern ordering experience.</p>
          <div className="socials">
            <span>IG</span>
            <span>FB</span>
            <span>X</span>
          </div>
        </div>

        <div>
          <h3>Company</h3>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/products">Products</a>
          <a href="/contact">Contact</a>
        </div>

        <div>
          <h3>Support</h3>
          <p><Mail size={16} /> support@organicfood.com</p>
          <p><Phone size={16} /> +91 98765 43210</p>
          <p><MapPin size={16} /> Aurangabad, Maharashtra</p>
        </div>

        <div>
          <h3>Fresh Newsletter</h3>
          <p>Get offers, seasonal fruits, and fresh basket updates.</p>
          <div className="newsletter">
            <input placeholder="Your email" />
            <button>Join</button>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        © 2026 Organic Food. Premium React website.
      </div>
    </footer>
  )
}

export default Footer
