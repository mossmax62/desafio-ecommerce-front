import PropTypes from 'prop-types';
import { FaBell } from 'react-icons/fa';
import './NotificationBell.css';

const NotificationBell = ({ count }) => {
  return (
    <div className="notification-bell">
      <FaBell className="bell-icon" />
      {count > 0 && <span className="notification-count">{count}</span>}
    </div>
  );
};

NotificationBell.propTypes = {
  count: PropTypes.number.isRequired,
};

export default NotificationBell;
