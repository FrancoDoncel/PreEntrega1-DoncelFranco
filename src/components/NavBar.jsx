import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import style from '../css/NavBar.module.css'
import CartWidget from './CartWidget';

function BasicExample() {
return (
    <Navbar expand="lg"  bg="dark" data-bs-theme="dark">
    <Container>
        <Navbar.Brand href="#home"><img src="src/assets/img/perfume-svgrepo-com.png" alt="logo" className={style.logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="#home">Perfumes Masculinos</Nav.Link>
            <Nav.Link href="#link">Perfumes Femeninos</Nav.Link>
            <NavDropdown title="Más información" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Métodos de pago</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
                Revendedores
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Preguntas frecuentes</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
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