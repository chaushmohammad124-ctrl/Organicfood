import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id)
      if (existing) {
        return current.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...current, { ...product, quantity: 1 }]
    })
    setIsCartOpen(true)
  }

  const increaseQty = (id) => {
    setCart((current) =>
      current.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
    )
  }

  const decreaseQty = (id) => {
    setCart((current) =>
      current
        .map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
        .filter((item) => item.quantity > 0)
    )
  }

  const removeItem = (id) => {
    setCart((current) => current.filter((item) => item.id !== id))
  }

  const clearCart = () => setCart([])

  const totalItems = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart]
  )

  const subtotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart]
  )

  const delivery = subtotal > 0 ? 30 : 0
  const discount = subtotal >= 500 ? 50 : 0
  const grandTotal = subtotal + delivery - discount

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        increaseQty,
        decreaseQty,
        removeItem,
        clearCart,
        totalItems,
        subtotal,
        delivery,
        discount,
        grandTotal
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used inside CartProvider')
  }
  return context
}
