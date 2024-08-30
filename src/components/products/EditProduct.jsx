// src/components/products/EditProduct.jsx
import { useState, useEffect } from 'react'
import { useProducts } from '../../contexts/ProductContext'
import PropTypes from 'prop-types'

const EditProduct = ({ productToEdit, onEditComplete }) => {
  // ...

  EditProduct.propTypes = {
    productToEdit: PropTypes.object.isRequired,
    onEditComplete: PropTypes.func.isRequired
  }
  const { updateProduct } = useProducts()
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [make, setMake] = useState('')
  const [model, setModel] = useState('')

  useEffect(() => {
    if (productToEdit) {
      setName(productToEdit.name)
      setPrice(productToEdit.price)
      setMake(productToEdit.make)
      setModel(productToEdit.model)
    }
  }, [productToEdit])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(productToEdit)
    console.log(name)
    console.log(price)
    productToEdit.name = name
    productToEdit.price = price
    productToEdit.make = make
    productToEdit.model = model
    console.log(productToEdit)
    updateProduct(productToEdit)
    onEditComplete()
  }

  if (!productToEdit) return null

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Product</h2>
      <input
        type='text'
        placeholder='Maker'
        value={make}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='text'
        placeholder='Price'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type='text'
        placeholder='Model'
        value={model}
        onChange={(e) => setModel(e.target.value)}
      />
      <button type='submit'>Update</button>
    </form>
  )
}

export default EditProduct
