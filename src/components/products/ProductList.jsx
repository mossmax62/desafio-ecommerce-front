import { ProductContext, useProducts } from '../../contexts/ProductContext'
import { useCart } from '../../contexts/CartContext'
import { useAuth } from '../../contexts/AuthContext'
import IconHeart from '../fav/IconHeart'
import './ProductList.css'
import { useContext } from 'react'

const ProductList = () => {
  const { products, toggleLike, isLiked } = useProducts()
  const { addToCart } = useCart()
  const { isAuthenticated } = useAuth()

  // Función para manejar el like y dislike
  const handleLike = (productId) => {
    if (isAuthenticated) {
      toggleLike(productId)
    } else {
      alert('Debes iniciar sesión para dar "like" a un producto.')
    }
  }

  const handleAddToCart = (product) => {
    if (isAuthenticated) {
      addToCart(product)
    } else {
      alert('Debes iniciar sesión para agregar productos al carrito.')
    }
  }

  const { handleSeeSelectedCar } = useContext(ProductContext)

  return (
    <>
      <div className='container product-list-container p-0'>
        <div className='product-list'>
          <div className='row row-gap-4 py-3'>
            {products && products.length > 0 && products.map((product) => (
              <div key={product.id} className='col-lg-4 col-md-6 col-sm-12'>
                <div className='card d-flex flex-column'>
                  <div className='like-icon like-icon-container text-end pe-2 pt-2'>
                    <IconHeart
                      onClick={() => handleLike(product.id)}
                      filled={isLiked(product.id)}
                    />
                  </div>
                  <a href='' onClick={() => handleSeeSelectedCar(event, product.id)}>
                    <div className='card-img-container'>
                      <div className='img-container'>
                        <img className='card-img-top' src={product.img} alt={product.modelo} />
                      </div>
                    </div>
                  </a>
                  <div className='card-body'>
                    <div className='d-flex flex-column'>
                      <div className='card-car-info d-flex flex-column text-center'>
                        <div>
                          <p className='m-0 fs-5 fw-semibold'>{product.marca}</p>
                          <p className='m-0 fs-6 text-body-secondary'>{product.modelo}</p>
                        </div>
                        <div>
                          <p className='m-0 fs-6 fw-semibold'>$ {product.precio.toLocaleString('es-ES')}</p>
                        </div>
                      </div>
                      <div className='d-flex justify-content-around'>
                        <p className='m-0 fs-6 text-body-secondary'>stock: <span className='fw-semibold'>{product.stock}</span></p>
                        <p className='m-0 fs-6 text-body-secondary'>categoria: <span className='fw-semibold'>{product.categoria}</span></p>
                      </div>
                    </div>
                  </div>
                  <a onClick={() => handleAddToCart(product)} className='btn btn-success'><i className='bi bi-cart-fill' /> Agregar al Carro</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductList
