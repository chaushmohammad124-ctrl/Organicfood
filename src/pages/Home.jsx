import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
// 
import {ArrowRight,Leaf,ShieldCheck,Truck,Sparkles,Star,Apple,Salad,BadgeCheck,Clock,Gift,Users,PackageCheck,Heart,Timer,MapPin} from 'lucide-react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import PageTransition from '../components/PageTransition'
import '../styles/home.css'
import '../styles/products.css'
import { useCart } from '../context/CartContext'

function Home() {
  // const [showVideo, setShowVideo] = useState(false)
  const featured = products.slice(0, 4)
  const { addToCart } = useCart()  
  const [showVideo, setShowVideo] = useState(false)
 const dailyBaskets = {
  Sunday: {
    name: "Sunday Family Organic Pack",
    includes: ["Banana", "Apple", "Spinach", "Tomato", "Carrot"],
    price: 499,
  },
  Monday: {
    name: "Monday Fresh Organic Pack",
    includes: ["Mango", "Orange", "Broccoli", "Potato", "Cucumber"],
    price: 549,
  },
  Tuesday: {
    name: "Tuesday Healthy Green Pack",
    includes: ["Grapes", "Spinach", "Tomato", "Bell Pepper", "Apple"],
    price: 529,
  },
  Wednesday: {
    name: "Wednesday Farm Fresh Pack",
    includes: ["Banana", "Papaya", "Carrot", "Broccoli", "Lemon"],
    price: 499,
  },
  Thursday: {
    name: "Thursday Premium Organic Pack",
    includes: ["Avocado", "Apple", "Tomato", "Spinach", "Orange"],
    price: 599,
  },
  Friday: {
    name: "Friday Family Fresh Pack",
    includes: ["Mango", "Banana", "Potato", "Carrot", "Cucumber"],
    price: 519,
  },
  Saturday: {
    name: "Saturday Weekend Organic Pack",
    includes: ["Strawberry", "Apple", "Broccoli", "Bell Pepper", "Spinach"],
    price: 649,
  },
}

const today = new Date().toLocaleDateString("en-US", {
  weekday: "long",
})

const todayBasket = dailyBaskets[today]

const familyBasket = {
  id: 100 + new Date().getDay(),
  name: todayBasket.name,
  category: "Basket",
  price: todayBasket.price,
  unit: "basket",
  rating: 4.9,
  stock: "In Stock",
  tag: `${today} Special`,
  image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=900&q=90",
  description: `Today's basket includes ${todayBasket.includes.join(", ")}.`,
  details: `This ${today} organic basket includes ${todayBasket.includes.join(", ")}. Products change every day to keep your family meals fresh and healthy.`,
  benefits: todayBasket.includes,
} 
  return (
    <PageTransition className="homePage">
      <section className="heroVideoSection">
        <video
          className="heroVideo"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=90"
        >
          <source src="https://videos.pexels.com/video-files/3195634/3195634-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>

        <div className="heroVideoOverlay"></div>

        <motion.div
          className="heroContent"
          initial={{ opacity: 0, y: 55 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85 }}
        >
          <span className="tag whiteTag"><Sparkles size={18} /> Premium Organic</span>
          <h1>Organic Food Delivered Fresh To Your Door.</h1>
          <p>
            A premium organic food brand experience with fresh fruits, healthy vegetables,
            smooth cart ordering, glossy UI, and modern animations.
          </p>

          <div className="heroBtns">
            <Link to="/products" className="primaryBtn">
              Start Ordering <ArrowRight size={19} />
            </Link>
          </div>

          <div className="heroTrust">
            <div><BadgeCheck /><span>Certified Fresh</span></div>
            <div><Truck /><span>Fast Delivery</span></div>
            <div><Clock /><span>Same Day Order</span></div>
          </div>
        </motion.div>

       <motion.div
  className="heroGlassPanel"
  initial={{ opacity: 0, x: 70 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9 }}
>
  <div className="panelTop">
   <span>{today} Fresh Basket</span>
<strong>₹{todayBasket.price}</strong>
  </div>

  <img
    src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=900&q=90"
    alt="Family Organic Pack"
  />

  <div className="panelBottom">
    <div>
      <h3>{todayBasket.name}</h3>
<p>{todayBasket.includes.slice(0, 3).join(" + ")}</p>
    </div>
    <Star fill="currentColor" />
  </div>
<div className="basketIncludes">
  <h4>Today Includes:</h4>

  <div>
    {todayBasket.includes.map((item) => (
      <span key={item}>{item}</span>
    ))}
  </div>
</div>
  <button className="basketOrderBtn" onClick={() => addToCart(familyBasket)}>
    Order This Basket
  </button>
</motion.div>
      </section>

      <section className="categoryStrip">
        <motion.div whileHover={{ scale: 1.05, y: -8 }}><Apple /><h3>Fresh Fruits</h3><p>Sweet and natural</p></motion.div>
        <motion.div whileHover={{ scale: 1.05, y: -8 }}><Salad /><h3>Vegetables</h3><p>Green and healthy</p></motion.div>
        <motion.div whileHover={{ scale: 1.05, y: -8 }}><Truck /><h3>Fast Delivery</h3><p>Quick and safe</p></motion.div>
        <motion.div whileHover={{ scale: 1.05, y: -8 }}><ShieldCheck /><h3>Quality</h3><p>Carefully checked</p></motion.div>
      </section>
      {/* Remove below if code is not working */}
      <section className="whyChoose">
  <div className="sectionHeader">
    <span className="smallTitle">Why Choose Us</span>
    <h2>Freshness you can trust every day</h2>
    <p>Organic Food gives customers fresh products, quick delivery, and a smooth ordering experience.</p>
  </div>

  <div className="whyGrid">
    {[
      {
        icon: <Leaf />,
        title: "Farm Fresh",
        text: "Products are selected fresh from trusted farms."
      },
      {
        icon: <ShieldCheck />,
        title: "Quality Checked",
        text: "Every product is checked before packing."
      },
      {
        icon: <Truck />,
        title: "Fast Delivery",
        text: "Fresh food delivered safely to your home."
      },
      {
        icon: <Heart />,
        title: "Healthy Lifestyle",
        text: "Perfect for daily healthy eating habits."
      }
    ].map((item, index) => (
      <motion.div
        className="whyCard"
        key={item.title}
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -10 }}
      >
        {item.icon}
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </motion.div>
    ))}
  </div>
</section>
{/* upper if code is not working remove upper */}
      <section className="section productsPreview">
        <div className="sectionHeader">
          <span className="smallTitle">Featured Products</span>
          <h2>Popular fresh picks</h2>
          <p>Our most loved organic products selected for freshness, taste, and quality.</p>
        </div>


        <div className="productGrid">
          {featured.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>
      <section className="offerBanner">
  <div className="offerContent">
    <span><Gift size={18} /> Special Offer</span>
    <h2>Get 20% off on your first organic basket</h2>
    <p>Order fresh fruits and vegetables today and enjoy healthy food at your doorstep.</p>
    <Link to="/products">
      Claim Offer <ArrowRight size={18} />
    </Link>
  </div>
</section>

      <section className="freshProcess">
        <div className="sectionHeader">
          <span className="smallTitle">How It Works</span>
          <h2>Fresh order process</h2>
        </div>

        <div className="processGrid">
          {[
            ["01", "Choose Products", "Select fruits and vegetables from our fresh organic collection."],
            ["02", "Add To Cart", "Your cart opens instantly and updates quantity responsively."],
            ["03", "Place Order", "Confirm your basket and our Organic Food team contacts you."]
          ].map((item, index) => (
            <motion.div
              key={item[0]}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
            >
              <span>{item[0]}</span>
              <h3>{item[1]}</h3>
              <p>{item[2]}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="videoShowcase">
  <video autoPlay loop muted playsInline>
    <source src="https://videos.pexels.com/video-files/4110257/4110257-uhd_2560_1440_25fps.mp4" type="video/mp4" />
  </video>

  <div className="foodParticles">
    <span>🍎</span>
    <span>🥦</span>
    <span>🥕</span>
    <span>🍓</span>
    <span>🥬</span>
  </div>

  <div>
    <span className="smallTitle">Fresh From Nature</span>
    <h2>Healthy food is the first step toward a better life.</h2>
    <p>
      Choose fresh fruits and vegetables every day for more energy, better health,
      and a naturally happy lifestyle.
    </p>
    <Link to="/products">Explore Fresh Products <ArrowRight size={18} /></Link>
  </div>
</section>
      {/* if code is not working delt down code  */}
<section className="statsSection">
  {[
    {
      icon: <Users />,
      number: "2K+",
      label: "Happy Customers"
    },
    {
      icon: <PackageCheck />,
      number: "50+",
      label: "Fresh Products"
    },
    {
      icon: <Timer />,
      number: "24h",
      label: "Fast Delivery"
    },
    {
      icon: <MapPin />,
      number: "10+",
      label: "Delivery Areas"
    }
  ].map((item, index) => (
    <motion.div
      className="statCard"
      key={item.label}
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      {item.icon}
      <h2>{item.number}</h2>
      <p>{item.label}</p>
    </motion.div>
  ))}
</section>
{/* if code is not working delt upper things  */}
   <section className="testimonials">
  <div className="sectionHeader">
    <span className="smallTitle">Customers</span>
    <h2>People love Organic Food</h2>
    <p>Real words from customers who enjoy our fresh fruits and vegetables.</p>
  </div>

  <div className="reviewMarquee">
    <div className="reviewTrack">
      {[
        ["Aarav Khan", "The fruits were very fresh and sweet. My family really liked the quality."],
        ["Sana Shaikh", "Vegetables were clean, fresh, and packed nicely. Delivery was also quick."],
        ["Rohit Patil", "The tomatoes and carrots tasted natural and fresh."],
        ["Priya Sharma", "I ordered bananas and apples. Everything looked fresh and tasted amazing."],
        ["Imran Pathan", "Green vegetables were clean and healthy. Perfect for daily cooking."],
        ["Neha Patil", "Good quality organic products. I will order again for my family."]
      ].concat([
        ["Aarav Khan", "The fruits were very fresh and sweet. My family really liked the quality."],
        ["Sana Shaikh", "Vegetables were clean, fresh, and packed nicely. Delivery was also quick."],
        ["Rohit Patil", "The tomatoes and carrots tasted natural and fresh."],
        ["Priya Sharma", "I ordered bananas and apples. Everything looked fresh and tasted amazing."],
        ["Imran Pathan", "Green vegetables were clean and healthy. Perfect for daily cooking."],
        ["Neha Patil", "Good quality organic products. I will order again for my family."]
      ]).map((review, index) => (
        <div className="floatingReviewCard" key={index}>
          <div className="stars">★★★★★</div>
          <p>“{review[1]}”</p>
          <h3>{review[0]}</h3>
        </div>
      ))}
    </div>

    <div className="reviewTrack second">
      {[
        ["Sameer Shaikh", "The broccoli and spinach were fresh and clean. Very good service."],
        ["Ayesha Khan", "The mangoes were sweet and naturally tasty. Loved the quality."],
        ["Farhan Ali", "Packing was clean and the vegetables looked farm fresh."],
        ["Zoya Mirza", "Fresh fruits arrived on time and tasted really good."],
        ["Karan Patil", "The quality is better than normal market vegetables."],
        ["Meera Sharma", "Healthy food, fresh taste, and good delivery experience."]
      ].concat([
        ["Sameer Shaikh", "The broccoli and spinach were fresh and clean. Very good service."],
        ["Ayesha Khan", "The mangoes were sweet and naturally tasty. Loved the quality."],
        ["Farhan Ali", "Packing was clean and the vegetables looked farm fresh."],
        ["Zoya Mirza", "Fresh fruits arrived on time and tasted really good."],
        ["Karan Patil", "The quality is better than normal market vegetables."],
        ["Meera Sharma", "Healthy food, fresh taste, and good delivery experience."]
      ]).map((review, index) => (
        <div className="floatingReviewCard" key={index}>
          <div className="stars">★★★★★</div>
          <p>“{review[1]}”</p>
          <h3>{review[0]}</h3>
        </div>
      ))}
    </div>
  </div>
</section>
      <AnimatePresence>
  {showVideo && (
    <motion.div
      className="videoModalOverlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowVideo(false)}
    >
      <motion.div
        className="videoModal"
        initial={{ scale: 0.8, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 40 }}
        transition={{ type: "spring", stiffness: 180, damping: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="closeVideo" onClick={() => setShowVideo(false)}>
          
        </button>

        <video controls autoPlay>
          <source src="/videos/fresh-story.mp4" type="video/mp4" />
          Your browser does not support video.
        </video>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </PageTransition>
  )
}

export default Home

