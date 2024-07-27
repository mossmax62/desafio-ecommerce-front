import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NotificationBell from './NotificationBell';
import CartIcon from './CartIcon';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();


    const handleLogout = () => {
        console.log('Logout');
        logout();
        navigate('/');
    }

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href='/' >DESAFIO ECOMMERCE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto"
                            navbarScroll>
                            <Link to="/" className="nav-link btn btn-warning m-1">Inicio</Link>
                            <Link to="/notifications" className="nav-link btn btn-warning m-1"><NotificationBell count={3} /> </Link>
                            <Link to="/shopping-cart" className="nav-link btn btn-warning m-1"><CartIcon itemCount={2} /></Link>

                            {!isAuthenticated ?
                                <NavDropdown title="Acceso" id="basic-nav-dropdown" className="nav-link btn btn-warning m-1 p-1">
                                    <NavDropdown.Item href='/sign-in' className="nav-link btn btn-warning" >
                                        Sign In
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href='/sign-up' className="nav-link btn btn-warning">
                                        {/* <Link to="/sign-up" className="nav-link btn btn-warning">Sign Up</Link> */}
                                        Sign Up
                                    </NavDropdown.Item>
                                </NavDropdown>
                                :
                                <NavDropdown title="Mi cuenta" id="basic-nav-dropdown" className="nav-link btn btn-warning m-1 p-1">
                                    <NavDropdown.Item href='/user-profile' className="nav-link btn btn-warning" >
                                        Profile
                                    </NavDropdown.Item>

                                    <NavDropdown.Item onClick={handleLogout} className="nav-link btn btn-warning" >
                                        Sign Out
                                    </NavDropdown.Item>
                                </NavDropdown>
                            }
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