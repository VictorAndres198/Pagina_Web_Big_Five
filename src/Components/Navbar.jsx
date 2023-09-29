import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


function CustomNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <NavDropdown title="Idioma" id="language-dropdown">
                        <NavDropdown.Item /*as={Link} to="/Agregar_la_ruta_del_archivo_JSX"*/>Español</NavDropdown.Item>
                        <NavDropdown.Item>Inglés</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Menú" id="menu-dropdown">
                        <NavDropdown.Item>Sobre nosotros</NavDropdown.Item>
                        <NavDropdown.Item>Compara el test con amigos</NavDropdown.Item>
                        {/* Agrega más ítems aquí */}
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default CustomNavbar;