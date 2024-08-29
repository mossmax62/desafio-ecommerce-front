import { useCart } from '../../contexts/CartContext'
import '../products/ProductList.css'

const ShoppingCart = () => {
  const { cart, clearCart, addToCart, removeFromCart } = useCart()
  return (
    <div className='container'>
      <div>
        <h1>Shopping Cart</h1>
        <div className='container product-list'>
          <div className='row'>
            {cart.map(product => (
              <div key={Math.random() * product.id} className='col-sm-2 card m-2 text-center'>
                <div className='card-title'>
                  <h3>{product.make}</h3>
                  <h2>{product.model}</h2>
                </div>
                <div className='card-body'>
                  <img className='card-img-top' src={product.image} alt={product.model} />
                </div>
                <div className='card-text'>
                  Cantidad : $ {product.quantity}
                </div>
                <div className='card-text'>
                  $ {product.price * product.quantity}
                </div>
                <button onClick={() => addToCart(product)} className='btn btn-primary'>Add more</button>
                <button onClick={() => removeFromCart(product.id)} className='btn btn-danger'>Remove</button>
              </div>

            ))}
            <br />
          </div>
        </div>
      </div>
      <div>
        <div className='container'>
          <h3>Total del carro: $ {cart.reduce((total, product) => total + product.price * product.quantity, 0)}</h3>
        </div>
        <button onClick={clearCart} className='btn btn-danger'>Clear Cart</button>

      </div>
    </div>
  )
}
export default ShoppingCart
