import React, { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import responseCars from '../assets/cars.json'

export const ProductContext = createContext()
const cars = responseCars
const localStorage = window.localStorage

const ProductContextProvider = ({ children }) => {
  ProductContextProvider.propTypes = {
    children: PropTypes.node.isRequired
  }
  const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem('products')
    return storedProducts ? JSON.parse(storedProducts) : cars
  })

  useEffect(() => {
    // Load products from localStorage on component mount
    console.log(cars)
    const storedProducts = localStorage.getItem('products')
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts))
    }
  }, [])

  useEffect(() => {
    // Save products to localStorage whenever it changes
    localStorage.setItem('products', JSON.stringify(products))
  }, [products])

  const addProduct = (product) => {
    setProducts([...products, product])
  }

  const updateProduct = (updatedProduct) => {
    console.log(updatedProduct)
    setProducts(products.map((product) => (product.id === updateProduct.id ? updatedProduct : product)))
  }

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id))
  }

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  )
}

const useProducts = () => {
  const context = React.useContext(ProductContext)
  if (!context) {
    throw new Error('useProducts must be used within a ProductContextProvider')
  }
  return context
}

export { ProductContextProvider, useProducts }
