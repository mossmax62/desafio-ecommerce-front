import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NotificationBell from './NotificationBell'
import CartIcon from './CartIcon'
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
          <Navbar.Brand href='/'><h1>DESAFIO ECOMMERCE</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav
              className='ms-auto'
              navbarScroll
            >
              <Link to='/' className='nav-link btn btn-warning m-1'>Inicio</Link>
              <Link to='/notifications' className='nav-link btn btn-warning m-1'><NotificationBell count={3} /> </Link>
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
