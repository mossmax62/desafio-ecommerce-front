import { useProducts } from '../../contexts/ProductContext'
import { useCart } from '../../contexts/CartContext'
import './ProductList.css'

const ProductList = () => {
  const { products } = useProducts()
  const { addToCart } = useCart()

  return (
    <>
      <div>
        <div className='container'>
          <div className='product-list'>
            <div className='row'>
              {products.map(product => (
                <div key={product.id} className='col-md-3 sm-6 mb-3'>
                  <div className='card text-center'>
                    <div className='card-title'>
                      <h3>{product.make}</h3>
                      <h2>{product.model}</h2>
                    </div>
                    <div className='card-body'>
                      <img className='card-img-top' src={product.image} alt={product.model} />
                    </div>
                    <div className='card-text'>
                      $ {product.price}
                    </div>
                  &nbsp;
                    <button onClick={() => addToCart(product)} className='btn'>Add to Cart</button>
                  </div>
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
