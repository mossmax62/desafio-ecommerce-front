import React, { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

export const ProductContext = createContext()

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [carSelected, setCarSelected] = useState('')

  const navigate = useNavigate()

  // const BACKEND_URL = 'https://back-9x5b.onrender.com/'
  // const BACKEND_URL = 'http://localhost:3000/'
  const BACKEND_URL = 'https://fork-ecommerce-back.onrender.com/'

  useEffect(() => {
    // Solicitar productos desde el backend
    const fetchProducts = async () => {
      try {
        const response = await axios.get(BACKEND_URL + 'products')
        const fetchedProducts = response.data

        // Almacenar los productos recibidos en el estado
        setProducts(fetchedProducts)
        // Guardar los productos en localStorage
        window.localStorage.setItem('products', JSON.stringify(fetchedProducts))
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    fetchProducts()
  }, [])

  useEffect(() => {
    // Guardar productos en localStorage cuando cambien
    window.localStorage.setItem('products', JSON.stringify(products))
  }, [products])

  function handleAddSwal () {
    Swal.fire({
      title: 'Nuevo producto agregado',
      text: 'Excelente decisión!',
      icon: 'success'
    })
  }

  const addProduct = (product, token) => {
    console.log(product)
    axios.post(BACKEND_URL + 'products', product, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        setProducts([...products, response.data])
        handleAddSwal()
      })
      .catch(error => {
        if (error.response) {
          // El servidor respondió con un código de estado diferente de 2xx
          console.error('Error en la respuesta:', error.response.data)
        } else if (error.request) {
          // La solicitud fue hecha pero no hubo respuesta
          console.error('Error en la solicitud:', error.request)
        } else {
          // Algo más ocurrió al configurar la solicitud
          console.error('Error inesperado:', error.message)
        }
      })
  }

  const updateProduct = (updatedProduct, token) => {
    axios.put(BACKEND_URL + `products/${updatedProduct.id}`, updatedProduct, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        setProducts(products.map(product =>
          product.id === updatedProduct.id ? response.data : product
        ))
      })
      .catch(error => console.error('Error updating product:', error))
  }

  function handleRemoveSwal () {
    Swal.fire({
      title: 'Producto eliminado',
      text: 'Por favor continua administrando tus publicaciones.',
      icon: 'success'
    })
  }

  const deleteProduct = (id, token) => {
    axios.delete(BACKEND_URL + `products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(() => {
        setProducts(products.filter(product => product.id !== id))
        handleRemoveSwal()
      })
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
