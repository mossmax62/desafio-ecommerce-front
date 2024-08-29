import React from 'react'
import { useProducts } from '../contexts/ProductContext'
import IconHeart from '../components/fav/IconHeart'
import '../components/products/ProductList'

const Favoritos = () => {
  const { products, toggleLike, isLiked } = useProducts()

  // Filtra los productos que tienen un like
  const favoriteProducts = products.filter(product => isLiked(product.id))

  // Función para manejar el like y dislike
  const handleLike = (productId) => {
    toggleLike(productId)
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
                  <button onClick={() => addToCart(product)} className='btn'>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
      </div>
          )
        : (<p>No hay favoritos</p>)}
    </div>
  )
}

export default Favoritos
