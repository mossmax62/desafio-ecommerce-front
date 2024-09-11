import { useCart } from '../../contexts/CartContext'
import '../products/ProductList.css'

const ShoppingCart = () => {
  const { cart, clearCart, addToCart, removeFromCart, buyCart } = useCart()
  return (
    <div className='container'>
      <div>
        <h1>Shopping Cart</h1>
        <div className='container product-list'>
          <div className='row'>
            {cart.map(product => (
              <div key={Math.random() * product.id} className='col-sm-2 card m-2 text-center'>
                <div className='card-title'>
                  <h3>{product.marca}</h3>
                  <h2>{product.modelo}</h2>
                </div>
                <div className='card-body'>
                  <img className='card-img-top' src={product.img} alt={product.modelo} />
                </div>
                <div className='card-text'>
                  Cantidad : $ {product.quantity}
                </div>
                <div className='card-text'>
                  $ {product.precio * product.quantity}
                </div>
                <div>
                  <button onClick={() => addToCart(product)} className='btn btn-primary'>Add more</button>
                  <button onClick={() => removeFromCart(product.id)} className='btn btn-danger'>Remove</button>
                </div>
              </div>

            ))}
            <br />
          </div>
          <div>
            <h3>Total de productos: $ {cart.reduce((total, product) => total + product.quantity, 0)}</h3>
            <h3 className='text-success'>Total del carro: $ {cart.reduce((total, product) => total + product.precio * product.quantity, 0)}</h3>
            <button onClick={clearCart} className='btn btn-danger'>Clear Cart</button>
            <button onClick={buyCart} className='btn btn-success'>Procesar la compra</button>
          </div>
        </div>
      </div>
      <div />
    </div>
  )
}
export default ShoppingCart
