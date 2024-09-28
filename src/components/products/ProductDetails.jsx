import { ProductContext } from '../../contexts/ProductContext'
import { useContext } from 'react'
import './ProductDetails.css'

const ProductDetails = () => {
  const { carSelected } = useContext(ProductContext)

  return (
    <>
      <div className='product-details-container'>
        <div className='card mb-3' style={{ width: '100%' }}>
          <div className='row'>
            <div className='col-sm-12 col-lg-4 p-2 d-flex align-items-center justify-content-center'>
              <img src={carSelected && carSelected.img} className='w-75 rounded-start rounded' alt='...' />
            </div>
            <div className='col-sm-12 col-lg-8'>
              <div className='card-body d-flex flex-column justify-content-between h-100 px-5'>
                <div>
                  <h1 className='m-0 fs-1 product-list-h1 text-uppercase text-center'>{carSelected && carSelected.marca}</h1>
                  <h2 className='m-0 fs-3 product-list-h1 text-uppercase text-center'>{carSelected && carSelected.modelo}</h2>
                </div>
                <div className='container car-info-details-container'>
                  <div className='row d-flex flex-column gap-3'>
                    <div className='col-12 d-flex flex-column gap-3'>
                      <h3 className='m-0 fs-6 product-list-h1 text-uppercase'>Especificaciones</h3>
                      <ul class='list-group list-group-flush'>
                        <li class='list-group-item p-0'>stock: <span className='fw-semibold'>{carSelected.stock}</span></li>
                        <li class='list-group-item p-0'>categoria: <span className='fw-semibold'>{carSelected.categoria}</span></li>
                        <li class='list-group-item p-0'>Fecha de publicación: <span className='fw-semibold'>{carSelected.fecha_creacion.split('T')[0]}</span></li>
                      </ul>
                    </div>
                    <div className='col-12 d-flex flex-column gap-3'>
                      <h3 className='m-0 fs-6 product-list-h1 text-uppercase'>Información adicional</h3>
                      <p className='m-0 card-text'>{carSelected && carSelected.descripcion}</p>
                      <p className='m-0 text-center fs-6 fw-semibold'>$ {carSelected && carSelected.precio.toLocaleString('es-ES')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails
