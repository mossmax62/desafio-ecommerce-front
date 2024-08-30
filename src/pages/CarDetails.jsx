import { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'
import { useCart } from '../contexts/CartContext'
import ProductDetails from '../components/products/ProductDetails'

const CarDetails = () => {
  const { carSelected } = useContext(ProductContext)
  const { addToCart } = useCart()

  return (
    <div className='container d-flex vh-100 justify-content-center flex-column'>
      <ProductDetails />
      <button onClick={() => addToCart(carSelected)} className='btn ms-auto btn btn-danger' style={{ width: '15%' }}>Add to Cart</button>
    </div>

  )
}

export default CarDetails
