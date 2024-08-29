import { ProductContext, useProducts } from '../../contexts/ProductContext'
import { useCart } from '../../contexts/CartContext'
import './ProductList.css'
import { useContext } from 'react'

const ProductList = () => {
  const { products } = useProducts()
  const { addToCart } = useCart()

  const { handleSeeSelectedCar } = useContext(ProductContext)

  return (
    <>
      <div>
        <div className='container'>
          <div className='product-list'>
            <div className='row'>
              {products.map(product => (
                <div key={product.id} className='card col-sm-2 card m-2 p-1 text-center'>
                  <div className='card-title'>
                    <a href='' onClick={() => handleSeeSelectedCar(event, product.id)}><h3>{product.make}</h3></a>
                    <a href='' onClick={() => handleSeeSelectedCar(event, product.id)}><h2>{product.model}</h2></a>
                  </div>
                  <div className='card-body'>
                    <a href='' onClick={() => handleSeeSelectedCar(event, product.id)}><img className='card-img-top' src={product.image} alt={product.model} /></a>
                  </div>
                  <div className='card-text'>
                    $ {product.horsepower}
                  </div>
                  &nbsp;
                  <button onClick={() => addToCart(product)} className='btn'>Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductList
