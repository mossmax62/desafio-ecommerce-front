import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>DESAFIO FINAL ECOMMERCE</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to="/" className="nav-link btn btn-warning">Home</Link>
                        <Link to="/sign-in" className="nav-link btn btn-warning">Sign In</Link>
                        <Link to="/sign-up" className="nav-link btn btn-warning">Sign Up</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Navigation;