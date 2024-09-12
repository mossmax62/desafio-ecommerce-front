import './SearchBar.css'
import { useContext, useState } from 'react'
import { ProductContext } from '../../contexts/ProductContext'

const SearchBar = () => {
  const { products, handleSeeSelectedCar } = useContext(ProductContext)
  const [busqueda, setBusqueda] = useState('')
  const [sugerencias, setSugerencias] = useState([])

  const handleChange = (e) => {
    const value = e.target.value
    setBusqueda(value)
    if (value) {
      const filtered = products.filter((product) =>
        product.marca.toLowerCase().includes(value.toLowerCase()) ||
        product.modelo.toLowerCase().includes(value.toLowerCase()) ||
        product.categoria.toLowerCase().includes(value.toLowerCase()) ||
        product.precio.toString().includes(value)
      )
      setSugerencias(filtered)
    } else {
      setSugerencias([])
    }
  }

  const handleSelection = (event, id) => {
    handleSeeSelectedCar(event, id)
    setBusqueda('')
    setSugerencias([])
  }

  return (
    <div className='w-75 position-relative'>
      <div className='d-flex align-items-center rounded-pill bg-secondary'>
        <input
          type='text'
          placeholder='Busca aquí el auto perfecto para ti'
          value={busqueda}
          onChange={handleChange}
          className='form-control rounded-start rounded-start-pill'
        />
        <svg className='rounded-end-pill mx-3 bi bi-search' xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='white' viewBox='0 0 16 16'>
          <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0' />
        </svg>
      </div>
      {sugerencias.length > 0 && (
        <ul className='sugerencias-list list-group list-group-flush position-absolute'>
          {sugerencias.map((sugerencia) => (
            <li className='list-group-item p-2 d-flex justify-content-evenly' key={sugerencia.id} onClick={() => handleSelection(event, sugerencia.id)}>
              <div className='d-flex align-items-center'>
                <img className='li-image' src={sugerencia.img} alt={sugerencia.modelo} />
              </div>
              <div className='d-flex align-items-center ms-3'>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item active p-1'><span className='fw-bold'> Marca:</span> {sugerencia.marca}</li>
                  <li className='list-group-item p-1'><span className='fw-bold'> Modelo:</span> {sugerencia.modelo}</li>
                  <li className='list-group-item p-1'><span className='fw-bold'> Categoria:</span> {sugerencia.categoria}</li>
                  <li className='list-group-item p-1'><span className='fw-bold'> Precio:</span> {sugerencia.precio}</li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchBar
