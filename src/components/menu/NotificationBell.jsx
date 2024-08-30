import PropTypes from 'prop-types'
import { FaHeart } from 'react-icons/fa'
import './FavoriteHeart.css'

const NotificationBell = ({ count }) => {
  return (
    <div className='favorite-heart'>
      <FaHeart className='heart-icon' />
      {count > 0 && <span className='notification-count'>{count}</span>}
    </div>
  )
}

NotificationBell.propTypes = {
  count: PropTypes.number.isRequired,
}

export default NotificationBell
