import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'

const UserProfile = () => {
  const { currentUser } = useAuth()
  console.log(currentUser)

  return (
    <div className='container m-5'>
      <div className='row mt-5'>
        <div className='col-6 bg-ligth p-3 border border-primary'>
          <Link to='/manage-products' className='nav-link border border-primary btn btn-warning m-1'>Mis publicaciones</Link>
          <Link to='/shopping-cart' className='nav-link border border-primary btn btn-warning m-1'>Carrito de compras</Link>
        </div>
        <div className='col-6 border border-primary p-3'>
          <h1>User Profile</h1>
          <h2>Bienvenido {currentUser.nombre} {currentUser.apellido}</h2>
        </div>

      </div>
    </div>
  )
}
export default UserProfile
