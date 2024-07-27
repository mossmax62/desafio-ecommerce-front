import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NotificationBell from './NotificationBell';
import CartIcon from './CartIcon';

const Navigation = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>DESAFIO FINAL ECOMMERCE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to="/" className="nav-link btn btn-warning">Inicio</Link>
                            <Link to="/notifications" className="nav-link btn btn-warning"><NotificationBell count={3} /> </Link>
                            <Link to="/shopping-cart" className="nav-link btn btn-warning"><CartIcon itemCount={2} /></Link>
                            <NavDropdown title="Mi cuenta" id="basic-nav-dropdown">
                                <NavDropdown.Item href='/sign-in' className="nav-link btn btn-warning" >
                                    Sign In
                                </NavDropdown.Item>
                                <NavDropdown.Item href='/sign-up' className="nav-link btn btn-warning">
                                    {/* <Link to="/sign-up" className="nav-link btn btn-warning">Sign Up</Link> */}
                                    Sign Up
                                </NavDropdown.Item>
                            </NavDropdown>
                            {/* <Link to="/sign-in" className="nav-link btn btn-warning">Sign In</Link>
                        <Link to="/sign-up" className="nav-link btn btn-warning">Sign Up</Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
export default Navigation;