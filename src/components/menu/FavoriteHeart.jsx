import PropTypes from 'prop-types'
import { FaHeart } from 'react-icons/fa'
import './FavoriteHeart.css'

const FavoriteHeart = ({ count }) => {
  return (
    <div className='favorite-heart'>
      <FaHeart className='heart-icon' />
      {count > 0 && <span className='notification-count'>{count}</span>}
    </div>
  )
}

FavoriteHeart.propTypes = {
  count: PropTypes.number.isRequired
}

export default FavoriteHeart
