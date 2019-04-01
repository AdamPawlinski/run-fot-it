import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import News from './News.component';
import About from './About.component';
import Contact from './Contact.component';

const Navigation = () => {
    return (
        <Navbar > 
            <Navbar.Brand href="/">Brand link</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"/>
                <Nav className="mr-auto">
                    <NavLink to="/news">News</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Kontakt</NavLink>
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>                    <
                    </NavDropdown> */}
                </Nav>
        </Navbar> 

    )
}

export default Navigation;  