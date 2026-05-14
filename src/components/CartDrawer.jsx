// import { AnimatePresence, motion } from 'framer-motion'
// import { Minus, Plus, ShoppingBag, Trash2, X, CheckCircle, Sparkles } from 'lucide-react'
// import { useCart } from '../context/CartContext'
// import '../styles/cart.css'

// function CartDrawer() {
//   const {
//     cart,
//     isCartOpen,
//     setIsCartOpen,
//     increaseQty,
//     decreaseQty,
//     removeItem,
//     clearCart,
//     subtotal,
//     delivery,
//     discount,
//     grandTotal
//   } = useCart()

//   const placeOrder = () => {
//   if (cart.length === 0) return

//   const customerName = prompt("Enter your name:")
//   if (!customerName) return

//   const customerPhone = prompt("Enter your phone number:")
//   if (!customerPhone) return

//   const customerAddress = prompt("Enter your delivery address:")
//   if (!customerAddress) return

//   const newOrder = {
//     id: Date.now(),
//     customer: {
//       name: customerName,
//       phone: customerPhone,
//       address: customerAddress
//     },
//     items: cart,
//     subtotal,
//     delivery,
//     discount,
//     grandTotal,
//     status: "Pending",
//     date: new Date().toLocaleString()
//   }

//   const oldOrders = JSON.parse(localStorage.getItem("orders")) || []
//   localStorage.setItem("orders", JSON.stringify([...oldOrders, newOrder]))

//   alert("Order saved successfully! Organic Food team will contact you soon.")
//   clearCart()
//   setIsCartOpen(false)
// }

//   return (
//     <AnimatePresence>
//       {isCartOpen && (
//         <>
//           <motion.div
//             className="cartOverlay"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setIsCartOpen(false)}
//           />

//           <motion.aside
//             className="cartDrawer"
//             initial={{ x: "110%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "110%" }}
//             transition={{ type: "spring", stiffness: 180, damping: 24 }}
//           >
//             <div className="cartHeader">
//               <div>
//                 <span><Sparkles size={16} /> Fresh Basket</span>
//                 <h2>Your Order Cart</h2>
//               </div>
//               <button onClick={() => setIsCartOpen(false)}><X /></button>
//             </div>

//             {cart.length === 0 ? (
//               <div className="emptyCart">
//                 <ShoppingBag size={60} />
//                 <h3>Your cart is empty</h3>
//                 <p>Add fresh organic products and your cart will open here.</p>
//               </div>
//             ) : (
//               <>
//                 <div className="cartItems">
//                   {cart.map((item) => (
//                     <motion.div
//                       className="cartItem"
//                       key={item.id}
//                       layout
//                       initial={{ opacity: 0, x: 25 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: 25 }}
//                     >
//                       <img src={item.image} alt={item.name} />

//                       <div className="cartItemInfo">
//                         <h3>{item.name}</h3>
//                         <p>₹{item.price} / {item.unit}</p>

//                         <div className="qtyControls">
//                           <button onClick={() => decreaseQty(item.id)}><Minus size={15} /></button>
//                           <span>{item.quantity}</span>
//                           <button onClick={() => increaseQty(item.id)}><Plus size={15} /></button>
//                         </div>
//                       </div>

//                       <div className="cartItemRight">
//                         <strong>₹{item.price * item.quantity}</strong>
//                         <button onClick={() => removeItem(item.id)}><Trash2 size={17} /></button>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>

//                 <div className="cartSummary">
//                   <div><span>Subtotal</span><strong>₹{subtotal}</strong></div>
//                   <div><span>Delivery</span><strong>₹{delivery}</strong></div>
//                   <div><span>Discount</span><strong>-₹{discount}</strong></div>
//                   <div className="grandTotal"><span>Total</span><strong>₹{grandTotal}</strong></div>

//                   <button className="orderBtn" onClick={placeOrder}>
//                     <CheckCircle size={20} />
//                     Place Order
//                   </button>

//                   <button className="clearBtn" onClick={clearCart}>Clear Cart</button>
//                 </div>
//               </>
//             )}
//           </motion.aside>
//         </>
//       )}
//     </AnimatePresence>
//   )
// }

// export default CartDrawer


import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  X,
  CheckCircle,
  Sparkles,
  User,
  Phone,
  MapPin,
  ArrowLeft
} from 'lucide-react'
import { useCart } from '../context/CartContext'
import '../styles/cart.css'

function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    increaseQty,
    decreaseQty,
    removeItem,
    clearCart,
    subtotal,
    delivery,
    discount,
    grandTotal
  } = useCart()

  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [orderSuccess, setOrderSuccess] = useState(false)
  const [savedOrders, setSavedOrders] = useState(
  JSON.parse(localStorage.getItem('orders')) || []
)

  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    address: ''
  })

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value
    })
  }

  const submitOrder = (e) => {
    e.preventDefault()

    if (!customer.name || !customer.phone || !customer.address) {
      alert('Please fill all delivery details')
      return
    }

    const newOrder = {
      id: Date.now(),
      customer,
      items: cart,
      subtotal,
      delivery,
      discount,
      grandTotal,
      status: 'Pending',
      date: new Date().toLocaleString()
    }

    const oldOrders = JSON.parse(localStorage.getItem('orders')) || []
    const updatedOrders = [...oldOrders, newOrder]
localStorage.setItem('orders', JSON.stringify(updatedOrders))
setSavedOrders(updatedOrders)

    setOrderSuccess(true)
    clearCart()

    setTimeout(() => {
      setOrderSuccess(false)
      setCheckoutOpen(false)
      setCustomer({
        name: '',
        phone: '',
        address: ''
      })
      setIsCartOpen(false)
    }, 2200)
  }

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            className="cartOverlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
          />

          <motion.aside
            className="cartDrawer"
            initial={{ x: '110%' }}
            animate={{ x: 0 }}
            exit={{ x: '110%' }}
            transition={{ type: 'spring', stiffness: 180, damping: 24 }}
          >
            <div className="cartHeader">
              <div>
                <span>
                  <Sparkles size={16} /> Fresh Basket
                </span>
                <h2>{checkoutOpen ? 'Checkout Details' : 'Your Order Cart'}</h2>
              </div>

              <button onClick={() => setIsCartOpen(false)}>
                <X />
              </button>
            </div>

            {orderSuccess ? (
              <div className="orderSuccess">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 180 }}
                >
                  <CheckCircle size={72} />
                </motion.div>

                <h2>Order Saved Successfully!</h2>
                <p>Organic Food team will contact you soon.</p>
              </div>
            ) : checkoutOpen ? (
              <form className="checkoutForm" onSubmit={submitOrder}>
                <button
                  type="button"
                  className="backToCart"
                  onClick={() => setCheckoutOpen(false)}
                >
                  <ArrowLeft size={18} />
                  Back to cart
                </button>

                <div className="checkoutInput">
                  <User size={20} />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={customer.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="checkoutInput">
                  <Phone size={20} />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={customer.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="checkoutInput textareaBox">
                  <MapPin size={20} />
                  <textarea
                    name="address"
                    rows="4"
                    placeholder="Full delivery address"
                    value={customer.address}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="checkoutSummary">
                  <h3>Order Summary</h3>

                  {cart.map((item) => (
                    <div key={item.id}>
                      <span>
                        {item.name} × {item.quantity}
                      </span>
                      <strong>₹{item.price * item.quantity}</strong>
                    </div>
                  ))}

                  <hr />

                  <div>
                    <span>Subtotal</span>
                    <strong>₹{subtotal}</strong>
                  </div>

                  <div>
                    <span>Delivery</span>
                    <strong>₹{delivery}</strong>
                  </div>

                  <div>
                    <span>Discount</span>
                    <strong>-₹{discount}</strong>
                  </div>

                  <div className="checkoutTotal">
                    <span>Total</span>
                    <strong>₹{grandTotal}</strong>
                  </div>
                </div>

                <button type="submit" className="confirmOrderBtn">
                  <CheckCircle size={20} />
                  Confirm Order
                </button>
              </form>
            ) : cart.length === 0 ? (
             <div className="emptyCart">
  <ShoppingBag size={60} />
  <h3>Your cart is empty</h3>
  <p>Add fresh organic products and your cart will open here.</p>

  {savedOrders.length > 0 && (
    <div className="savedOrdersBox">
      <h3>Your Saved Orders</h3>

      {savedOrders.slice().reverse().map((order) => (
        <div className="savedOrderCard" key={order.id}>
          <div className="savedOrderTop">
            <strong>Order #{order.id}</strong>
            <span>{order.status}</span>
          </div>

          <p><b>Name:</b> {order.customer.name}</p>
          <p><b>Phone:</b> {order.customer.phone}</p>
          <p><b>Address:</b> {order.customer.address}</p>

         <div className="savedOrderItems">
  {order.items.map((item) => (
    <div className="savedOrderProduct" key={item.id}>
      <img src={item.image} alt={item.name} />

      <div>
        <h4>{item.name}</h4>
        <p>
          ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
        </p>
      </div>
    </div>
  ))}
</div>
          <h4>Total: ₹{order.grandTotal}</h4>
          <small>{order.date}</small>
        </div>
      ))}
    </div>
  )}
</div>
            ) : (
              <>
                <div className="cartItems">
                  {cart.map((item) => (
                    <motion.div
                      className="cartItem"
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: 25 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 25 }}
                    >
                      <img src={item.image} alt={item.name} />

                      <div className="cartItemInfo">
                        <h3>{item.name}</h3>
                        <p>
                          ₹{item.price} / {item.unit}
                        </p>

                        <div className="qtyControls">
                          <button type="button" onClick={() => decreaseQty(item.id)}>
                            <Minus size={15} />
                          </button>

                          <span>{item.quantity}</span>

                          <button type="button" onClick={() => increaseQty(item.id)}>
                            <Plus size={15} />
                          </button>
                        </div>
                      </div>

                      <div className="cartItemRight">
                        <strong>₹{item.price * item.quantity}</strong>

                        <button type="button" onClick={() => removeItem(item.id)}>
                          <Trash2 size={17} />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="cartSummary">
                  <div>
                    <span>Subtotal</span>
                    <strong>₹{subtotal}</strong>
                  </div>

                  <div>
                    <span>Delivery</span>
                    <strong>₹{delivery}</strong>
                  </div>

                  <div>
                    <span>Discount</span>
                    <strong>-₹{discount}</strong>
                  </div>

                  <div className="grandTotal">
                    <span>Total</span>
                    <strong>₹{grandTotal}</strong>
                  </div>

                  <button className="orderBtn" onClick={() => setCheckoutOpen(true)}>
                    <CheckCircle size={20} />
                    Place Order
                  </button>

                  <button className="clearBtn" onClick={clearCart}>
                    Clear Cart
                  </button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

export default CartDrawer