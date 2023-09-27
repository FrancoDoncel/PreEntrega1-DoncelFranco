import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import style from '../../css/NavBar.module.css'

function BasicExample() {
return (
    <Navbar expand="lg"  bg="dark" data-bs-theme="dark">
        <Container>
            <Link to='/'> 
                <Navbar.Brand>
                    <img src="src\assets\img\CoronaWhite-01.png" alt="logo" className={style.logo} />
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/category/men's clothing">Perfumes Masculinos</Nav.Link>
                <Nav.Link as={Link} to="/category/women's clothing">Perfumes Femeninos</Nav.Link>
                <NavDropdown title="Más información" id="basic-nav-dropdown">
                    <NavDropdown.Item >Métodos de pago</NavDropdown.Item>
                    <NavDropdown.Item >
                        Revendedores
                    </NavDropdown.Item>
                    <NavDropdown.Item >Preguntas frecuentes</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item >
                        Nosotros
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav>
        <CartWidget/>
        </Navbar.Collapse>
    </Container>
    </Navbar>
);
}

export default BasicExample;