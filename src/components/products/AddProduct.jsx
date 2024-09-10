import { useState } from 'react'
import { useProducts } from '../../contexts/ProductContext'

const AddProduct = () => {
  const { addProduct } = useProducts()
  const [modelo, setModelo] = useState('')
  const [marca, setMarca] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [precio, setPrecio] = useState('')
  const [stock, setStock] = useState('')
  const [img, setImagenUrl] = useState('')
  const [categoria, setCategoria] = useState('')
  const [favorito, setFavorito] = useState(false)
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {}
    if (!modelo) newErrors.modelo = 'Modelo is required'
    if (!marca) newErrors.marca = 'Marca is required'
    if (!descripcion) newErrors.descripcion = 'Descripcion is required'
    if (!precio) newErrors.precio = 'Precio is required'
    if (!stock) newErrors.stock = 'Stock is required'
    if (!img) newErrors.img = 'Image URL is required'
    if (!categoria) newErrors.categoria = 'Categoria is required'
    console.log('Justo antes de validacio de add product')
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    console.log('Justo antes de add product')
    addProduct({
      modelo,
      marca,
      descripcion,
      precio: parseFloat(precio), // Convert price to number
      stock: parseInt(stock, 10),
      img,
      categoria,
      favorito
    })

    setModelo('')
    setMarca('')
    setDescripcion('')
    setPrecio('')
    setStock('')
    setImagenUrl('')
    setCategoria('')
    setFavorito(false)
    setErrors({})
  }

  return (
    <div className='container mt-4'>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} className='row g-3'>
        {/* Modelo */}
        <div className='col-md-6'>
          <label htmlFor='productModel' className='form-label'>Modelo</label>
          <input
            type='text'
            className={`form-control ${errors.modelo ? 'is-invalid' : ''}`}
            id='productModel'
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
          />
          {errors.modelo && <div className='invalid-feedback'>{errors.modelo}</div>}
        </div>

        {/* Marca */}
        <div className='col-md-6'>
          <label htmlFor='productMarca' className='form-label'>Marca</label>
          <input
            type='text'
            className={`form-control ${errors.marca ? 'is-invalid' : ''}`}
            id='productMarca'
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
          />
          {errors.marca && <div className='invalid-feedback'>{errors.marca}</div>}
        </div>

        {/* Precio */}
        <div className='col-md-6'>
          <label htmlFor='productPrecio' className='form-label'>Precio</label>
          <input
            type='number'
            className={`form-control ${errors.precio ? 'is-invalid' : ''}`}
            id='productPrecio'
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
          {errors.precio && <div className='invalid-feedback'>{errors.precio}</div>}
        </div>

        {/* Stock */}
        <div className='col-md-6'>
          <label htmlFor='productStock' className='form-label'>Stock</label>
          <input
            type='number'
            className={`form-control ${errors.stock ? 'is-invalid' : ''}`}
            id='productStock'
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
          {errors.stock && <div className='invalid-feedback'>{errors.stock}</div>}
        </div>

        {/* Imagen */}
        <div className='col-md-12'>
          <label htmlFor='productImageUrl' className='form-label'>Image URL</label>
          <input
            type='text'
            className={`form-control ${errors.img ? 'is-invalid' : ''}`}
            id='productImageUrl'
            value={img}
            onChange={(e) => setImagenUrl(e.target.value)}
          />
          {errors.img && <div className='invalid-feedback'>{errors.img}</div>}
        </div>

        {/* Categoria */}
        <div className='col-md-12'>
          <label htmlFor='productCategoria' className='form-label'>Categoria</label>
          <input
            type='text'
            className={`form-control ${errors.categoria ? 'is-invalid' : ''}`}
            id='productCategoria'
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          />
          {errors.categoria && <div className='invalid-feedback'>{errors.categoria}</div>}
        </div>

        {/* Favorito */}
        <div className='col-md-12'>
          <label className='form-label'>Favorito</label>
          <input
            type='checkbox'
            checked={favorito}
            onChange={(e) => setFavorito(e.target.checked)}
          />
        </div>

        <div className='col-12'>
          <button type='submit' className='btn btn-primary'>Add Product</button>
        </div>
      </form>
    </div>
  )
}

export default AddProduct
