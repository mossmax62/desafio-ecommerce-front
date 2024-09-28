import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import FavoriteHeart from './FavoriteHeart'
import CartIcon from './CartIcon'
import Logo from '../../assets/img/logo.png'
import { useAuth } from '../../contexts/AuthContext'
import { useCart } from '../../contexts/CartContext'
import { useProducts } from '../../contexts/ProductContext'
import SearchBar from '../../components/searchBar/SearchBar'
import './Navigation.css'

const Navigation = () => {
  const { isAuthenticated, logout } = useAuth()
  const { products, isLiked } = useProducts()

  const navigate = useNavigate()

  const { cart } = useCart()

  let totalProductos = 0
  cart.forEach(producto => {
    totalProductos += producto.quantity
  })

  let totalFavoritos = 0
  products.forEach(producto => {
    if (isLiked(producto.id)) {
      totalFavoritos += 1
    }
  })

  const handleLogout = () => {
    console.log('Logout')
    logout()
    navigate('/')
  }

  return (
    <>
      <Navbar className='navbar' expand='lg'>
        <Container>
          <Navbar.Brand href='/'> <img src={Logo} width='90' height='90' alt='logo' className='d-inline-block align-top' /></Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <div className='w-100 d-flex justify-content-center'>
              <SearchBar />
            </div>
            <Nav
              className='ms-auto d-flex align-items-center'
              navbarScroll
            >
              <Link to='/' className='nav-link btn'>Inicio</Link>
              <Link to='/favoritos' className='nav-link btn'><FavoriteHeart count={totalFavoritos} /> </Link>
              <Link to='/shopping-cart' className='nav-link btn'><CartIcon itemCount={totalProductos} /></Link>

              {!isAuthenticated
                ? <NavDropdown title='Acceso' id='basic-nav-dropdown' className='btn m-1 p-1'>
                  <NavDropdown.Item href='#/sign-in' className='nav-link btn btn-warning'>
                    Iniciar sesión
                  </NavDropdown.Item>
                  <NavDropdown.Item href='#/sign-up' className='nav-link btn'>
                    {/* <Link to="/sign-up" className="nav-link btn btn-warning">Sign Up</Link> */}
                    Registrarse
                  </NavDropdown.Item>
                </NavDropdown>
                : <NavDropdown title='Mi cuenta' id='basic-nav-dropdown' className='btn m-1 p-1'>
                  <NavDropdown.Item href='#/user-profile' className='nav-link btn btn-warning'>
                    Perfil
                  </NavDropdown.Item>
                  <NavDropdown.Item href='#/manage-products' className='nav-link btn'>
                    Administrar productos
                  </NavDropdown.Item>

                  <NavDropdown.Item onClick={handleLogout} className='nav-link btn'>
                    Cerrar sesión
                  </NavDropdown.Item>
                </NavDropdown>}
              {/* <Link to="/sign-in" className="nav-link btn btn-warning">Sign In</Link>
                        <Link to="/sign-up" className="nav-link btn btn-warning">Sign Up</Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
export default Navigation
