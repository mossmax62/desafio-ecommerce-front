import { createContext, useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import Swal from 'sweetalert2'

const CartContext = createContext()
const localStorage = window.localStorage

export const useCart = () => {
  return useContext(CartContext)
}

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  function handleAddSwal () {
    Swal.fire({
      title: 'Producto Agregado',
      text: 'Llevalo hoy!',
      icon: 'success'
    })
  }

  function handleRemoveSwal () {
    Swal.fire({
      title: 'Producto Eliminado',
      text: 'Se elimino el producto del carrito',
      icon: 'success'
    })
  }

  function handleBuyCartSwal () {
    Swal.fire({
      title: 'Gracias por tu compra',
      text: 'Tu compra será enviada a la brevedad.',
      icon: 'success'
    })
  }

  const buyCart = () => {
    handleBuyCartSwal()
    setCart([])
  }

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(item => item.id === product.id)

    if (existingProductIndex !== -1) {
      // If the product already exists, update its quantity
      const updatedCart = [...cart]
      updatedCart[existingProductIndex].quantity += 1
      setCart(updatedCart)
    } else {
      // If the product doesn't exist, add it to the cart with quantity 1
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }])
    }
    handleAddSwal()
  }

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      return prevCart.map((product) => {
        if (product.id === productId) {
          if (product.quantity > 1) {
            return { ...product, quantity: product.quantity - 1 }
          } else {
            return null // This will remove the product from the cart
          }
        } else {
          return product
        }
      }).filter(Boolean) // Remove null values from the array
    })
    handleRemoveSwal()
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, buyCart }}>
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired
}
