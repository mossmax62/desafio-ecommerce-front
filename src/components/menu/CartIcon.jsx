import PropTypes from 'prop-types'
import { FaShoppingCart } from 'react-icons/fa'
import './CartIcon.css'

const CartIcon = ({ itemCount }) => {
  return (
    <div className='cart-icon'>
      <FaShoppingCart className='shopping-cart-icon' />
      {itemCount > 0 && <span className='item-count'>{itemCount}</span>}
    </div>
  )
}

CartIcon.propTypes = {
  itemCount: PropTypes.number.isRequired
}

export default CartIcon
