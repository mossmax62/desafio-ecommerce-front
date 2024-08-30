import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'

const UserProfile = () => {
  const { currentUser } = useAuth()
  console.log(currentUser)

  return (
    <div className='container'>
      <div className='row mt-5'>
        <div className='col-6'>
          <Link to='/manage-products' className='nav-link btn btn-warning m-1'>Mis publicaciones</Link>
          <Link to='/shopping-cart' className='nav-link btn btn-warning m-1'>Carrito de compras</Link>
        </div>
        <div className='col-6'>
          <h1>User Profile</h1>
          <h2>Bienvenido {currentUser.username}</h2>
        </div>

      </div>
    </div>
  )
}
export default UserProfile
