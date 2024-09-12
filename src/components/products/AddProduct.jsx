import { useState } from 'react'
import { useProducts } from '../../contexts/ProductContext'
import { useAuth } from '../../contexts/AuthContext'
import Swal from 'sweetalert2'
import './AddProduct.css'

const AddProduct = () => {
  const { addProduct } = useProducts()
  const { token } = useAuth()
  const [modelo, setModelo] = useState('')
  const [marca, setMarca] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [precio, setPrecio] = useState('')
  const [stock, setStock] = useState('')
  const [img, setImagenUrl] = useState('')
  const [categoria, setCategoria] = useState('')
  const [favorito, setFavorito] = useState(false)
  const [errors, setErrors] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = {}
    if (!modelo) newErrors.modelo = 'Modelo is required'
    if (!marca) newErrors.marca = 'Marca is required'
    if (!descripcion) newErrors.descripcion = 'Descripcion is required'
    if (!precio || isNaN(parseFloat(precio))) newErrors.precio = 'Precio must be a valid number'
    if (!stock || isNaN(parseInt(stock))) newErrors.stock = 'Stock must be a valid number'
    if (!img) newErrors.img = 'Image URL is required'
    if (!categoria) newErrors.categoria = 'Categoria is required'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please fill out all required fields.'
      })
      return
    }

    try {
      await addProduct({
        modelo,
        marca,
        descripcion,
        precio: parseFloat(precio),
        stock: parseInt(stock, 10),
        img,
        categoria,
        favorito
      }, token)

      Swal.fire({
        icon: 'success',
        title: 'Producto añadido',
        text: 'El producto se ha añadido correctamente.',
        showConfirmButton: false,
        timer: 1500
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
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo añadir el producto. Verifica los datos.'
      })
      console.error('Error adding product:', error)
    }
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

        {/* Descripcion */}
        <div className='col-md-6'>
          <label htmlFor='productDescripcion' className='form-label'>Descripción</label>
          <input
            type='text'
            className={`form-control ${errors.descripcion ? 'is-invalid' : ''}`}
            id='productDescripcion'
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
          {errors.descripcion && <div className='invalid-feedback'>{errors.descripcion}</div>}
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
          <select
            className={`form-control ${errors.categoria ? 'is-invalid' : ''}`}
            id='productCategoria'
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value=''>Seleccione una categoría</option>
            <option value='SUV'>SUV</option>
            <option value='Sedan'>Sedan</option>
            <option value='Camioneta'>Camioneta</option>
          </select>

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
