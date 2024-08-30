import { ProductContext } from '../../contexts/ProductContext'
import { useContext } from 'react'

const ProductDetails = () => {
  const { carSelected } = useContext(ProductContext)

  return (
    <>
      <div>
        <div className='card mb-3' style={{ width: '100%' }}>
          <div className='row g-0'>
            <div className='col-md-4 d-flex p-2'>
              <img src={carSelected && carSelected.image} className='img-fluid rounded-start rounded' alt='...' />
            </div>
            <div className='col-md-8'>
              <div className='card-body d-flex flex-column justify-content-between h-100 px-5'>
                <div>
                  <h1 className='card-title text-center m-0'>{carSelected && carSelected.model}</h1>
                  <h2 className='card-title text-center m-0'>{carSelected && carSelected.make}</h2>
                </div>
                <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className='card-text text-end'>$ {carSelected && carSelected.horsepower}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails
