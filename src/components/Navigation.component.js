import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';
import logo from '../resources/rfi_logo.png';

const Navigation = () => {
    return (
        <Navbar variant="light" bg="light" expand="lg" fixed="top" className="shadow justify-content-between"> 
            <Navbar.Brand href="/">
                <img 
                    src={ logo }
                    width="120"
                    height="88"
                    alt="Run For IT logo"
                    className="d-inline-block"
                />
                {'Run For IT'}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"/>
            <Nav className="mr-auto justify-content-between">
                <Nav.Item >
                    <Nav.Link as={NavLink} to="/news">News</Nav.Link>
                </Nav.Item>
                <NavDropdown className="btn-default" title="O biegu" id="basic-nav-dropdown">
                    <NavDropdown.Item as={NavLink} to="/rules">regulamin</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/about">baza zawodów</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/route">trasa</NavDropdown.Item>
                </NavDropdown>               
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/contact">Kontakt</Nav.Link>
                </Nav.Item>
                
            </Nav>
        </Navbar> 

    )
}

export default Navigation;  