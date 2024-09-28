import { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'
import { useCart } from '../contexts/CartContext'
import ProductDetails from '../components/products/ProductDetails'

const CarDetails = () => {
  const { carSelected } = useContext(ProductContext)
  const { addToCart } = useCart()

  return (
    <div className='container d-flex vh-100 justify-content-center flex-column' style={{ minHeight: '100vh' }}>
      <ProductDetails />
      <button onClick={() => addToCart(carSelected)} className='btn ms-auto btn btn-success'>Agregar al carro</button>
    </div>

  )
}

export default CarDetails
