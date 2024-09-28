import { useState, useEffect } from 'react'
import { useProducts } from '../../contexts/ProductContext'
import { useAuth } from '../../contexts/AuthContext'
import PropTypes from 'prop-types'
import Swal from 'sweetalert2'
import './EditProduct.css'

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
      precio: price,
      modelo: make,
      marca: model
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
    <form onSubmit={handleSubmit} className='edit-product-container d-flex flex-column gap-3'>
      <h2 className='m-0 fs-4 product-list-h1 text-uppercase'>Modifica los detalles del producto</h2>
      <label for="makerInput" class="form-label m-0">Marca</label>
      <input
        type='text'
        placeholder='Marca'
        value={make}
        onChange={(e) => setMake(e.target.value)}
        id='makerInput'
        className='form-control'
      />
      <label for="modelInput" class="form-label m-0">Modelo</label>
      <input
        type='text'
        placeholder='Modelo'
        value={model}
        onChange={(e) => setModel(e.target.value)}
        id='modelInput'
        className='form-control'
      />
      <label for="priceInput" class="form-label m-0">Precio</label>
      <input
        type='text'
        placeholder='Precio'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        id='priceInput'
        className='form-control '
      />
      <button type='submit' className='btn btn-success'>Actualizar</button>
    </form>
  )
}

EditProduct.propTypes = {
  productToEdit: PropTypes.object.isRequired,
  onEditComplete: PropTypes.func.isRequired
}

export default EditProduct
