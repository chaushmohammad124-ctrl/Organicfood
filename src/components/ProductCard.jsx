import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingCart, Star, Eye } from 'lucide-react'
import { useCart } from '../context/CartContext'
import '../styles/products.css'

function ProductCard({ product, index }) {
  const { addToCart } = useCart()

  return (
    <motion.div
      className="productCard"
      initial={{ opacity: 0, y: 45, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.055, duration: 0.45 }}
      whileHover={{ y: -14, rotateX: 3, rotateY: -3 }}
    >
      <span className="productTag">{product.tag}</span>
      <span className="stockBadge">{product.stock}</span>

      <Link to={`/products/${product.id}`} className="productImageBox">
        <img src={product.image} alt={product.name} />
        <div className="imageShine"></div>
      </Link>

      <div className="quickActions">
        <Link to={`/products/${product.id}`}><Eye size={18} /></Link>
        <button onClick={() => addToCart(product)}><ShoppingCart size={18} /></button>
      </div>

      <div className="productContent">
        <div className="rating">
          <Star size={16} fill="currentColor" />
          <span>{product.rating}</span>
        </div>

        <p className="category">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="desc">{product.description}</p>

        <div className="productBottom">
          <h4>₹{product.price} <span>/ {product.unit}</span></h4>
          <button className="addToCartBtn" onClick={() => addToCart(product)}>
            <ShoppingCart size={18} />
            <span>Add</span>
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard
