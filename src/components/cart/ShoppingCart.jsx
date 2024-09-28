import { useCart } from '../../contexts/CartContext'
import '../products/ProductList.css'
import './ShoppingCart.css'

const ShoppingCart = () => {
  const { cart, clearCart, addToCart, removeFromCart, buyCart } = useCart()
  return (
    <div className='container shopping-cart-container vh-100 d-flex flex-column justify-content-center'>
      <div className='d-flex flex-column justify-content-center'>
        <h1 className='m-0 fs-1 product-list-h1 text-uppercase'>Carro de compras</h1>
        <div className='container product-list'>
          <div className='row'>
            {cart.map(product => (
              <div key={Math.random() * product.id} className='col-sm-12 col-md-3 card m-2 text-center p-0'>
                <div className='card-title'>
                  <h3 className='m-0 fs-5 fw-semibold'>{product.marca}</h3>
                  <h2 className='m-0 fs-5 fw-semibold'>{product.modelo}</h2>
                </div>
                <div className='card-body'>
                  <img className='card-img-top' src={product.img} alt={product.modelo} />
                </div>
                <div className='m-0 fs-6 fw-semibold'>
                  Cantidad : {product.quantity}
                </div>
                <div className='m-0 fs-6 fw-semibold'>
                  $ {product.precio * product.quantity}
                </div>
                <div>
                  <button onClick={() => addToCart(product)} className='btn btn-primary add-btn w-100'>Agregar más</button>
                  <button onClick={() => removeFromCart(product.id)} className='btn btn-danger remove-btn w-100'>Remover</button>
                </div>
              </div>

            ))}
            <br />
          </div>
          <div className='d-flex flex-column gap-2'>
            <h3 className='m-0 fs-5 product-list-h1 text-uppercase'>Total de productos:</h3>
            <p className='m-0 fw-bold fs-5 product-list-h1 text-uppercase'>{cart.reduce((total, product) => total + product.quantity, 0)}</p>
            <h3 className='m-0 fs-5 product-list-h1 text-uppercase'>Total del carro:</h3>
            <p className='m-0 fw-bold fs-5 product-list-h1 text-uppercase'>$ {cart.reduce((total, product) => total + product.precio * product.quantity, 0)}</p>
            <button onClick={clearCart} className='btn btn-danger w-25'>Vaciar carro</button>
            <button onClick={buyCart} className='btn btn-success w-25'>Procesar la compra</button>
          </div>
        </div>
      </div>
      <div />
    </div>
  )
}
export default ShoppingCart
