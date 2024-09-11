import React from 'react'
import { useProducts } from '../contexts/ProductContext'
import { useCart } from '../contexts/CartContext'
import { useAuth } from '../contexts/AuthContext' // Importamos el contexto de autenticación
import IconHeart from '../components/fav/IconHeart'
import '../components/products/ProductList'

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
    <div className='container'>
      <h1>Favoritos</h1>
      {favoriteProducts.length > 0
        ? (<div className='product-list'>
          <div className='row'>
            {favoriteProducts.map(product => (
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
                  <div className='like-icon'>
                    <IconHeart
                      onClick={() => handleLike(product.id)}
                      filled={isLiked(product.id)}
                    />
                  </div>
                  &nbsp;
                  <button onClick={() => handleAddToCart(product)} className='btn'>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>)
        : (
          <p>No hay favoritos</p>
          )}
    </div>
  )
}

export default Favoritos
