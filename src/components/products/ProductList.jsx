import { ProductContext, useProducts } from '../../contexts/ProductContext'
import { useCart } from '../../contexts/CartContext'
import IconHeart from '../fav/IconHeart'
import './ProductList.css'
import { useContext } from 'react'

const ProductList = () => {
  const { products, toggleLike, isLiked } = useProducts()
  const { addToCart } = useCart()

  // Función para manejar el like y dislike
  const handleLike = (productId) => {
    toggleLike(productId)
  }
  console.log(products)
  const { handleSeeSelectedCar } = useContext(ProductContext)

  return (
    <>
      <div>
        <div className='container'>
          <div className='product-list'>
            <div className='row'>
              {products && products.length > 0 && products.map((product) => (
                <div key={product.id} className='col-md-3 sm-6 mb-3'>
                  <div className='card text-center border border-primary rounded p-3'>
                    <div className='card-title'>
                      <h3>{product.marca}</h3>
                      <h2>{product.modelo}</h2>
                    </div>
                    <div className='card-body'>
                      <a href='' onClick={(event) => { event.preventDefault(); handleSeeSelectedCar(event, product.id); }}>
                        <img className='card-img-top img-fluid border border-primary rounded' src={product.imagen_url} alt={product.modelo} />
                      </a>
                    </div>
                    <div className='card-text'>
                      $ {product.precio}
                    </div>
                    <div className='like-icon'>
                      <IconHeart
                        onClick={() => handleLike(product.id)}
                        filled={isLiked(product.id)}
                      />
                    </div>
                  &nbsp;
                    <button onClick={() => addToCart(product)} className='btn btn-primary'>Add to Cart</button>
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
