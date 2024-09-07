import React, { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const ProductContext = createContext()

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [carSelected, setCarSelected] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    // Cargar productos del backend
    axios.get('http://localhost:3000/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error))
  }, [])

  useEffect(() => {
    // Guardar productos en localStorage cuando cambien
    window.localStorage.setItem('products', JSON.stringify(products))
  }, [products])

  const addProduct = (product) => {
    axios.post('http://localhost:3000/products', product)
      .then(response => setProducts([...products, response.data]))
      .catch(error => console.error('Error adding product:', error))
  }

  const updateProduct = (updatedProduct) => {
    axios.put(`http://localhost:3000/products/${updatedProduct.id}`, updatedProduct)
      .then(response => {
        setProducts(products.map(product =>
          product.id === updatedProduct.id ? response.data : product
        ))
      })
      .catch(error => console.error('Error updating product:', error))
  }

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:3000/products/${id}`)
      .then(() => setProducts(products.filter(product => product.id !== id)))
      .catch(error => console.error('Error deleting product:', error))
  }

  const toggleLike = (id) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === id ? { ...product, liked: !product.liked } : product
      )
    )
  }

  const isLiked = (id) => {
    const product = products.find(product => product.id === id)
    return product ? product.liked : false
  }

  const handleSeeSelectedCar = (event, id) => {
    event.preventDefault()
    setCarSelected(products.find(product => product.id === id))
    navigate(`/car/${id}`)
  }

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct, carSelected, handleSeeSelectedCar, toggleLike, isLiked }}>
      {children}
    </ProductContext.Provider>
  )
}

ProductContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}

const useProducts = () => {
  const context = React.useContext(ProductContext)
  if (!context) {
    throw new Error('useProducts must be used within a ProductContextProvider')
  }
  return context
}

export { ProductContextProvider, useProducts }
