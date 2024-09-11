import { useState, useEffect } from 'react'
import { useProducts } from '../../contexts/ProductContext'
import { useAuth } from '../../contexts/AuthContext'
import PropTypes from 'prop-types'
import Swal from 'sweetalert2'

const EditProduct = ({ productToEdit, onEditComplete }) => {
  const { updateProduct } = useProducts()
  const { token } = useAuth()
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

  const handleSubmit = async (e) => {
    e.preventDefault()

    const updatedProduct = {
      ...productToEdit,
      name,
      price,
      make,
      model
    }

    try {
      await updateProduct(updatedProduct, token)
      Swal.fire({
        title: 'Producto actualizado',
        text: 'El producto se ha actualizado correctamente.',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
      })
      onEditComplete()
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'No se pudo actualizar el producto.',
        icon: 'error'
      })
    }
  }

  if (!productToEdit) return null

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Product</h2>
      <input
        type='text'
        placeholder='Maker'
        value={make}
        onChange={(e) => setMake(e.target.value)}
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

EditProduct.propTypes = {
  productToEdit: PropTypes.object.isRequired,
  onEditComplete: PropTypes.func.isRequired
}

export default EditProduct
