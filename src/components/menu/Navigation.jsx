import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import FavoriteHeart from './FavoriteHeart'
import CartIcon from './CartIcon'
import Logo from '../../assets/img/MDF.png'
import { useAuth } from '../../contexts/AuthContext'
import { useCart } from '../../contexts/CartContext'

const Navigation = () => {
  const { isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()

  const { cart } = useCart()

  let totalProductos = 0
  cart.forEach(producto => {
    totalProductos += producto.quantity
  })

  const handleLogout = () => {
    console.log('Logout')
    logout()
    navigate('/')
  }

  return (
    <>
      <Navbar className='nav' expand='lg'>
        <Container>
          <Navbar.Brand href='/'> <img src={Logo} width='40' height='40' alt='logo' /></Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav
              className='ms-auto'
              navbarScroll
            >
              <Link to='/' className='nav-link btn btn-warning m-1'>Inicio</Link>
              <Link to='/favoritos' className='nav-link btn btn-warning m-1'><FavoriteHeart /> </Link>
              <Link to='/shopping-cart' className='nav-link btn btn-warning m-1'><CartIcon itemCount={totalProductos} /></Link>

              {!isAuthenticated
                ? <NavDropdown title='Acceso' id='basic-nav-dropdown' className='nav-link btn btn-warning m-1 p-1'>
                  <NavDropdown.Item href='/sign-in' className='nav-link btn btn-warning'>
                    Sign In
                  </NavDropdown.Item>
                  <NavDropdown.Item href='/sign-up' className='nav-link btn btn-warning'>
                    {/* <Link to="/sign-up" className="nav-link btn btn-warning">Sign Up</Link> */}
                    Sign Up
                  </NavDropdown.Item>
                  </NavDropdown>
                : <NavDropdown title='Mi cuenta' id='basic-nav-dropdown' className='nav-link btn btn-warning m-1 p-1'>
                  <NavDropdown.Item href='/user-profile' className='nav-link btn btn-warning'>
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item href='/manage-products' className='nav-link btn btn-warning'>
                    Manage Products
                  </NavDropdown.Item>

                  <NavDropdown.Item onClick={handleLogout} className='nav-link btn btn-warning'>
                    Sign Out
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
