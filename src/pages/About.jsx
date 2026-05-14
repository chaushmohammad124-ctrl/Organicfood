import { motion } from 'framer-motion'
import { Leaf, HeartHandshake, Recycle, Sprout, Award, Users, PackageCheck ,Quote,Target,Truck,ShieldCheck,CheckCircle,Home,PlayCircle,Clock,Box,MapPin} from 'lucide-react'
import PageTransition from '../components/PageTransition'
import '../styles/about.css'

function About() {
  return (
    <PageTransition className="page aboutPage">
      <section className="aboutHero">
        <motion.div
          className="aboutVideoCard"
          initial={{ opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <video autoPlay loop muted playsInline poster="https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1100&q=90">
            <source src="https://videos.pexels.com/video-files/5638297/5638297-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          </video>
          <div className="experienceBadge">
            <h2>5+</h2>
            <p>Years Fresh Service</p>
          </div>
        </motion.div>

        <motion.div
          className="aboutText"
          initial={{ opacity: 0, x: 45 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <span className="smallTitle">About Organic Food</span>
<h1>From our farm to your family’s table.</h1>
<p>
  Organic Food was started with a simple mission: to provide fresh, natural, and healthy food directly to your home.
  We work with trusted local farmers who grow fruits and vegetables with care, so every product you receive is fresh,
  clean, and full of natural taste.
</p>

<p>
  Our believes that good food should be honest, healthy, and easy to access. That is why we focus on quality
  checking, careful packing, and fast delivery, so your family can enjoy fresh organic food every day.
</p>
          <div className="aboutStats">
            <div><Award /><h2>50+</h2><p>Products</p></div>
            <div><Users /><h2>2K+</h2><p>Customers</p></div>
            <div><PackageCheck /><h2>24h</h2><p>Delivery</p></div>
          </div>
        </motion.div>
      </section>
<section className="aboutStorySection">
  <motion.div
    className="storyCard mainStory"
    initial={{ opacity: 0, y: 45 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <span className="smallTitle">Our Story</span>
    <h2>Started with a promise of fresh and honest food.</h2>
    <p>
      Organic Food started with one simple thought: every family should get fresh,
      natural, and healthy food without worrying about quality. We wanted to connect
      trusted local farms directly with homes, so customers can enjoy fruits and
      vegetables that are clean, fresh, and full of natural taste.
    </p>
  </motion.div>

  <motion.div
    className="storyCard ownerCard"
    initial={{ opacity: 0, y: 45 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: 0.1 }}
  >
    <Quote size={42} />
    <h3>Owner’s Message</h3>
    <p>
      “We believe food is not just something we eat, it is something that builds
      our health. That is why we personally focus on freshness, proper packing,
      and trusted quality before sending any order to our customers.”
    </p>
  </motion.div>
</section>
<section className="aboutVideoStory">
  <video autoPlay loop muted playsInline>
    <source
      src="https://videos.pexels.com/video-files/5638297/5638297-uhd_2560_1440_25fps.mp4"
      type="video/mp4"
    />
  </video>

  <div className="aboutVideoOverlay"></div>

  <motion.div
    className="aboutVideoContent"
    initial={{ opacity: 0, y: 45 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
  >
    <span className="smallTitle">
      <PlayCircle size={16} /> Freshness Journey
    </span>

    <h2>See how freshness begins before it reaches your home.</h2>

    <p>
      Every order starts with careful farm selection, quality checking, clean packing,
      and safe delivery. We make sure your fruits and vegetables feel fresh from the
      first look to the first bite.
    </p>
  </motion.div>

  <div className="videoStoryCards">
    {[
      {
        icon: <Sprout />,
        title: "Farm Fresh",
        text: "Products are selected from trusted farms."
      },
      {
        icon: <Box />,
        title: "Clean Packing",
        text: "Packed carefully to protect freshness."
      },
      {
        icon: <Truck />,
        title: "Fast Delivery",
        text: "Delivered safely to your doorstep."
      }
    ].map((item, index) => (
      <motion.div
        className="videoStoryCard"
        key={item.title}
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 }}
        whileHover={{ y: -12, scale: 1.04 }}
      >
        {item.icon}
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </motion.div>
    ))}
  </div>
</section>
<section className="dailyPromiseSection">
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="dailyPromiseText"
  >
    <span className="smallTitle">Daily Fresh Promise</span>
    <h2>Different fresh products, every single day.</h2>
    <p>
      We believe food should never feel old or boring. That is why our daily basket
      changes with fresh seasonal fruits and vegetables. Each day brings a new mix
      of healthy items for your family.
    </p>

    <div className="promiseMiniGrid">
      <div>
        <Clock />
        <span>Daily updated basket</span>
      </div>
      <div>
        <MapPin />
        <span>Local farm connection</span>
      </div>
      <div>
        <Leaf />
        <span>Natural food choices</span>
      </div>
    </div>
  </motion.div>

  <motion.div
    className="dailyPromiseImage"
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
  >
    <img
      src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1100&q=90"
      alt="Fresh organic basket"
    />

    <div className="floatingPromiseBadge">
      <Leaf />
      <div>
        <h3>Fresh Today</h3>
        <p>Seasonal organic picks</p>
      </div>
    </div>
  </motion.div>
</section>
<section className="missionSection">
  <motion.div
    className="missionImage"
    initial={{ opacity: 0, x: -45 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
  >
    <img
      src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=1100&q=90"
      alt="Organic farm"
    />
  </motion.div>

  <motion.div
    className="missionContent"
    initial={{ opacity: 0, x: 45 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
  >
    <span className="smallTitle">Our Mission</span>
    <h2>Making healthy eating simple, trusted, and fresh.</h2>
    <p>
      Our mission is to deliver fresh organic fruits and vegetables to every home
      with honesty, care, and quality. We want to make healthy eating simple,
      affordable, and trusted for every family.
    </p>

    <div className="missionPoints">
      <div>
        <Target />
        <span>Fresh food for every home</span>
      </div>
      <div>
        <ShieldCheck />
        <span>Quality checked before packing</span>
      </div>
      <div>
        <HeartHandshake />
        <span>Customer-first service</span>
      </div>
    </div>
  </motion.div>
</section>

<section className="processSection">
  <div className="sectionHeader">
    <span className="smallTitle">Farm To Door</span>
    <h2>How fresh food reaches you</h2>
    <p>Every order goes through a simple but careful freshness process.</p>
  </div>

  <div className="aboutProcessGrid">
    {[
      {
        icon: <Sprout />,
        title: "Farm Selection",
        text: "We collect fresh products from trusted local farms."
      },
      {
        icon: <CheckCircle />,
        title: "Quality Check",
        text: "Every fruit and vegetable is checked before packing."
      },
      {
        icon: <PackageCheck />,
        title: "Careful Packing",
        text: "Products are packed safely to protect freshness."
      },
      {
        icon: <Truck />,
        title: "Home Delivery",
        text: "Fresh organic food is delivered directly to your home."
      }
    ].map((item, index) => (
      <motion.div
        className="aboutProcessCard"
        key={item.title}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.12 }}
        whileHover={{ y: -12, scale: 1.03 }}
      >
        <span className="processNumber">0{index + 1}</span>
        {item.icon}
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </motion.div>
    ))}
  </div>
</section>

<section className="qualityPromise">
  <motion.div
    initial={{ opacity: 0, scale: 0.92 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="promiseIcon">
      <Home />
    </div>

    <span className="smallTitle">Our Quality Promise</span>
    <h2>Fresh, clean, and carefully selected.</h2>
    <p>
      We promise to provide fresh, clean, and carefully selected products. If something
      does not meet our quality standard, we do not send it to customers. Your family’s
      health and trust are our first priority.
    </p>
  </motion.div>
</section>
      <section className="values">
        <motion.div whileHover={{ y: -10 }}>
          <Leaf />
          <h3>Natural Food</h3>
          <p>Fresh products selected for daily healthy meals and clean lifestyle.</p>
        </motion.div>
        <motion.div whileHover={{ y: -10 }}>
          <HeartHandshake />
          <h3>Trusted Farmers</h3>
          <p>Products come from trusted sources with care and quality control.</p>
        </motion.div>
        <motion.div whileHover={{ y: -10 }}>
          <Recycle />
          <h3>Eco Friendly</h3>
          <p>Premium experience with a nature-friendly visual identity.</p>
        </motion.div>
        <motion.div whileHover={{ y: -10 }}>
          <Sprout />
          <h3>Healthy Living</h3>
          <p>Helping customers choose better food with an easy ordering flow.</p>
        </motion.div>
      </section>
    </PageTransition>
  )
}

export default About
