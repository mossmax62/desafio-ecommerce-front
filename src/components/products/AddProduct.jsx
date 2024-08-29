// src/components/AddProduct.jsx
import { useState } from 'react'
import { useProducts } from '../../contexts/ProductContext'

const AddProduct = () => {
  const { addProduct } = useProducts()
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [make, setMake] = useState('')
  const [model, setModel] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState('')
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()

    // Basic validation
    const newErrors = {}
    if (!name) newErrors.name = 'Name is required'
    if (!price) newErrors.price = 'Price is required'
    if (!make) newErrors.make = 'Make is required'
    if (!model) newErrors.model = 'Model is required'
    if (!image) newErrors.image = 'Image URL is required'
    if (!description) newErrors.description = 'Description is required'
    if (!quantity) newErrors.quantity = 'Quantity is required'
    else if (quantity <= 0) newErrors.quantity = 'Quantity must be greater than 0'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    addProduct({
      id: Math.random(),
      name,
      price,
      make,
      model,
      image,
      description,
      quantity: parseInt(quantity, 10) // Ensure quantity is an integer
    })

    // Clear form fields and errors
    setName('')
    setPrice('')
    setMake('')
    setModel('')
    setImage('')
    setDescription('')
    setQuantity('')
    setErrors({})
  }

  return (
    <div className='container mt-4'>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} className='row g-3'>
        <div className='col-md-6'>
          <label htmlFor='productName' className='form-label'>Name</label>
          <input
            type='text'
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            id='productName'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
        </div>

        {/* Price */}
        <div className='col-md-6'>
          <label htmlFor='productPrice' className='form-label'>Price</label>
          <input
            type='number' // Use type="number" for price
            className={`form-control ${errors.price ? 'is-invalid' : ''}`}
            id='productPrice'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {errors.price && <div className='invalid-feedback'>{errors.price}</div>}
        </div>

        {/* Make */}
        <div className='col-md-4'>
          <label htmlFor='productMake' className='form-label'>Make</label>
          <input
            type='text'
            className={`form-control ${errors.make ? 'is-invalid' : ''}`}
            id='productMake'
            value={make}
            onChange={(e) => setMake(e.target.value)}
          />
          {errors.make && <div className='invalid-feedback'>{errors.make}</div>}
        </div>

        {/* Model */}
        <div className='col-md-4'>
          <label htmlFor='productModel' className='form-label'>Model</label>
          <input
            type='text'
            className={`form-control ${errors.model ? 'is-invalid' : ''}`}
            id='productModel'
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
          {errors.model && <div className='invalid-feedback'>{errors.model}</div>}
        </div>

        {/* Quantity */}
        <div className='col-md-4'>
          <label htmlFor='productQuantity' className='form-label'>Quantity</label>
          <input
            type='number' // Use type="number" for quantity
            className={`form-control ${errors.quantity ? 'is-invalid' : ''}`}
            id='productQuantity'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          {errors.quantity && <div className='invalid-feedback'>{errors.quantity}</div>}
        </div>

        {/* Image URL */}
        <div className='col-md-12'>
          <label htmlFor='productImage' className='form-label'>Image URL</label>
          <input
            type='text'
            className={`form-control ${errors.image ? 'is-invalid' : ''}`}
            id='productImage'
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          {errors.image && <div className='invalid-feedback'>{errors.image}</div>}
        </div>

        {/* Description */}
        <div className='col-md-12'>
          <label htmlFor='productDescription' className='form-label'>Description</label>
          <textarea
            className={`form-control ${errors.description ? 'is-invalid' : ''}`}
            id='productDescription'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {errors.description && <div className='invalid-feedback'>{errors.description}</div>}
        </div>

        <div className='col-12'>
          <button type='submit' className='btn btn-primary'>Add Product</button>
        </div>
      </form>
    </div>
  )
}

export default AddProduct
