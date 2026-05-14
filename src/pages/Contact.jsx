
/replace of code/ 
import { motion } from 'framer-motion'
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Clock,
  MessageCircle,
  Truck,
  Leaf,
  HelpCircle,
  ShieldCheck
} from 'lucide-react'
import PageTransition from '../components/PageTransition'
import '../styles/contact.css'

const contactCards = [
  {
    icon: <Phone />,
    title: 'Call Us',
    text: '+91 98765 43210',
    sub: 'For quick order support'
  },
  {
    icon: <Mail />,
    title: 'Email Us',
    text: 'support@organicfood.com',
    sub: 'We reply as soon as possible'
  },
  {
    icon: <MapPin />,
    title: 'Visit Area',
    text: 'Aurangabad, Maharashtra',
    sub: 'Fresh delivery nearby'
  },
  {
    icon: <Clock />,
    title: 'Working Hours',
    text: '8 AM - 9 PM',
    sub: 'Open every day'
  }
]

const faqs = [
  {
    q: 'How fresh are the products?',
    a: 'We select fruits and vegetables carefully and pack them fresh before delivery.'
  },
  {
    q: 'Do you deliver daily baskets?',
    a: 'Yes, our daily basket changes with fresh seasonal fruits and vegetables.'
  },
  {
    q: 'Can I place bulk orders?',
    a: 'Yes, you can contact us for family packs, events, and bulk organic orders.'
  }
]

function Contact() {
  return (
    <PageTransition className="page contactPage">
      <section className="contactHero">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="smallTitle">Contact Organic Food</span>
          <h1>Let’s help you get fresh organic food.</h1>
          <p>
            Have questions about products, delivery, daily baskets, or bulk orders?
            Send us a message and our team will contact you soon.
          </p>
        </motion.div>
      </section>

      <section className="contactCards">
        {contactCards.map((card, index) => (
          <motion.div
            className="contactCard"
            key={card.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.03 }}
          >
            {card.icon}
            <h3>{card.title}</h3>
            <h4>{card.text}</h4>
            <p>{card.sub}</p>
          </motion.div>
        ))}
      </section>

      <section className="contactMainGrid">
        <motion.div
          className="contactInfoPanel"
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="smallTitle">Fresh Support</span>
          <h2>We are ready to help with your fresh order.</h2>
          <p>
            Organic Food focuses on fresh quality, clean packing, and fast delivery.
            Contact us for order help, product details, daily basket questions, or partnership support.
          </p>

          <div className="supportList">
            <div>
              <Leaf />
              <span>Fresh fruits and vegetables</span>
            </div>
            <div>
              <Truck />
              <span>Fast local delivery support</span>
            </div>
            <div>
              <ShieldCheck />
              <span>Quality checked before packing</span>
            </div>
          </div>

          <div className="deliveryPhoto">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=90"
              alt="Fresh organic delivery"
            />
            <div>
              <h3>Delivery Available</h3>
              <p>Aurangabad and nearby areas</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          className="contactForm"
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2>Send Message</h2>

          <div className="inputRow">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
          </div>

          <div className="inputRow">
            <input type="tel" placeholder="Phone Number" />
            <select defaultValue="">
              <option value="" disabled>Choose Topic</option>
              <option>Order Help</option>
              <option>Daily Basket</option>
              <option>Bulk Order</option>
              <option>Delivery Question</option>
            </select>
          </div>

          <textarea rows="6" placeholder="Write your message..."></textarea>

          <button type="button">
            Send Message <Send size={18} />
          </button>
        </motion.form>
      </section>

      <section className="contactBanner">
        <video autoPlay loop muted playsInline>
          <source
            src="https://videos.pexels.com/video-files/5638297/5638297-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>

        <div className="contactBannerOverlay"></div>

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="smallTitle">Fresh Promise</span>
          <h2>From farm freshness to your home comfort.</h2>
          <p>
            We believe healthy food should be easy to order, cleanly packed,
            and delivered with care.
          </p>
        </motion.div>
      </section>

      <section className="faqSection">
        <div className="sectionHeader">
          <span className="smallTitle">Need Help?</span>
          <h2>Frequently asked questions</h2>
          <p>Quick answers for Organic Food customers.</p>
        </div>

        <div className="faqGrid">
          {faqs.map((faq, index) => (
            <motion.div
              className="faqCard"
              key={faq.q}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <HelpCircle />
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}

export default Contact