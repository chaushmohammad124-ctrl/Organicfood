import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle, ShoppingCart, Star, Truck, ShieldCheck } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import PageTransition from '../components/PageTransition'
import ProductCard from '../components/ProductCard'
import '../styles/productDetail.css'
import '../styles/products.css'

function ProductDetail() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const product = products.find(item => item.id === Number(id))
  const related = products.filter(item => item.category === product?.category && item.id !== product?.id).slice(0, 3)

  if (!product) {
    return (
      <PageTransition className="page detailPage">
        <h1>Product not found</h1>
        <Link to="/products" className="backBtn">Back to Products</Link>
      </PageTransition>
    )
  }

  return (
    <PageTransition className="page detailWrapper">
      <section className="detailPage">
        <motion.div
          className="detailImage"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <span>{product.tag}</span>
          <img src={product.image} alt={product.name} />
        </motion.div>

        <motion.div
          className="detailText"
          initial={{ opacity: 0, x: 45 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link to="/products" className="backLink"><ArrowLeft size={18} /> Back to Products</Link>
          <span className="smallTitle">{product.category}</span>
          <h1>{product.name}</h1>

          <div className="detailRating">
            <Star size={18} fill="currentColor" />
            <strong>{product.rating}</strong>
            <span>{product.stock} · Premium quality</span>
          </div>

          <h2>₹{product.price} / {product.unit}</h2>
          <p>{product.details}</p>

          <div className="benefits">
            {product.benefits.map(item => (
              <div key={item}><CheckCircle size={18} /> {item}</div>
            ))}
          </div>

          <div className="deliveryBox">
            <Truck />
            <div>
              <h3>Fast fresh delivery</h3>
              <p>Delivered with careful packing and freshness protection.</p>
            </div>
          </div>

          <div className="qualityBox">
            <ShieldCheck />
            <span>Quality checked before packing</span>
          </div>

          <button className="addCartBtn" onClick={() => addToCart(product)}>
            <ShoppingCart size={20} />
            Add to Cart
          </button>
        </motion.div>
      </section>

      <section className="relatedSection">
        <div className="sectionHeader">
          <span className="smallTitle">Related Products</span>
          <h2>You may also like</h2>
        </div>

        <div className="productGrid relatedGrid">
          {related.map((item, index) => (
            <ProductCard key={item.id} product={item} index={index} />
          ))}
        </div>
      </section>
    </PageTransition>
  )
}

export default ProductDetail
