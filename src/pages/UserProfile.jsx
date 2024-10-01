import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import './UserProfile.css'

const UserProfile = () => {
  const { currentUser } = useAuth()
  console.log(currentUser)

  return (
    <div className='container user-profile-container vh-100 d-flex justify-content-center align-items-center'>
      <div className='row rounded h-75 w-100'>
        <div className='col-md-6 col-sm-12 border-end border-secondary'>
          <div className='d-flex flex-column justify-content-center align-items-center h-100 gap-3'>
            <div className='text-center welcome-text-container'>
              <h1 className='m-0 fs-3 product-list-h1 text-uppercase'>Perfil del usuario</h1>
              <h2 className='m-0 fs-1 product-list-h1 text-uppercase'>Bienvenido <span>{currentUser.nombre} {currentUser.apellido}</span></h2>
            </div>
            <Link to='/manage-products' className='btn btn-success m-0 w-50'><i className='bi bi-car-front-fill' /> Mis publicaciones</Link>
            <Link to='/shopping-cart' className='btn btn-success m-0 w-50'><i className='bi bi-cart-fill' /> Carrito de compras</Link>
          </div>
        </div>
        <div className='col-md-6 col-sm-12 d-none d-md-block'>
          <div className='d-flex flex-column justify-content-center h-100 gap-3'>
            <h1 className='m-0 fs-3 product-list-h1 text-uppercase'>Perfil del usuario</h1>
            <h2 className='m-0 fs-1 product-list-h1 text-uppercase'>Bienvenido <span>{currentUser.nombre} {currentUser.apellido}</span></h2>
          </div>
        </div>
      </div>
    </div>
  )
}
export default UserProfile
