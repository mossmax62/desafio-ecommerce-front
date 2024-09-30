import React from 'react'
import { useProducts } from '../contexts/ProductContext'
import { useCart } from '../contexts/CartContext'
import { useAuth } from '../contexts/AuthContext' // Importamos el contexto de autenticación
import IconHeart from '../components/fav/IconHeart'
import '../components/products/ProductList'
import './Favoritos.css'

const Favoritos = () => {
  const { products, toggleLike, isLiked } = useProducts()
  const { addToCart } = useCart()
  const { isAuthenticated } = useAuth() // Usamos el estado de autenticación

  // Filtra los productos que tienen un like
  const favoriteProducts = products.filter(product => isLiked(product.id))

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

  return (
    <div className='container favoritos-container min-vh-100 d-flex flex-column justify-content-center'>
      <h1 className='m-0 fs-1 product-list-h1 text-uppercase'>Favoritos</h1>
      {favoriteProducts.length > 0
        ? (<div>
          <div className='row rounded h-75 w-100r'>
            {favoriteProducts.map(product => (
              <div key={product.id} className='col-lg-3 col-md-6 p-2 g-col-6'>
                <div className='card text-center'>
                  <div className='card-title'>
                    <h3 className='m-0 fs-5 fw-semibold'>{product.marca}</h3>
                    <h2 className='m-0 fs-6 text-body-secondary'>{product.modelo}</h2>
                  </div>
                  <div className='card-body'>
                    <img className='card-img-top' src={product.img} alt={product.modelo} />
                  </div>
                  <div className='card-text m-0 fs-6 fw-semibold'>
                    $ {product.precio.toLocaleString('es-ES')}
                  </div>
                  <div className='like-icon'>
                    <IconHeart
                      onClick={() => handleLike(product.id)}
                      filled={isLiked(product.id)}
                    />
                  </div>
                  &nbsp;
                  <button onClick={() => handleAddToCart(product)} className='btn btn-success'><i className='bi bi-cart-fill' /> Agregar al carro</button>
                </div>
              </div>
            ))}
          </div>
        </div>)
        : (
          <p className='m-0 fs-3 product-list-h1 text-uppercase'><span>Aún</span> no hay favoritos seleccionados en tu lista</p>
        )}
    </div>
  )
}

export default Favoritos
