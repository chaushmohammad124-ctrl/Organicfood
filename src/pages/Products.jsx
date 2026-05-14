import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal, Sparkles } from 'lucide-react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import PageTransition from '../components/PageTransition'
import '../styles/products.css'

function Products() {
  const [filter, setFilter] = useState("All")
  const [search, setSearch] = useState("")

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchCategory = filter === "All" || product.category === filter
      const matchSearch = product.name.toLowerCase().includes(search.toLowerCase())
      return matchCategory && matchSearch
    })
  }, [filter, search])

  return (
    <PageTransition className="page productsPage">
      <div className="productsHero">
        <span className="smallTitle"><Sparkles size={15} /> Organic Collection</span>
        <h1>Order fresh organic products with one click.</h1>
        <p>Search products, filter categories, add items to your responsive cart, and place order easily.</p>
      </div>

      <div className="productToolbar">
        <div className="searchBox">
          <Search size={20} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search banana, apple, carrot..."
          />
        </div>

        <div className="filterWrapper">
          <SlidersHorizontal size={20} />
          {["All", "Fruits", "Vegetables"].map(item => (
            <button
              key={item}
              className={filter === item ? "active" : ""}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="productGrid">
        {filteredProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="emptyProducts">
          <h2>No product found</h2>
          <p>Try another search or category.</p>
        </div>
      )}
    </PageTransition>
  )
}

export default Products
