import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from "react-router-dom";
import { GoogleFonts } from 'google-fonts';
import {Col} from "react-bootstrap";
import Logo from '/DesignAGENCY.svg'


const Header = () => {
    return (
        <div className="row">
            <Navbar className="MyNavbar" bg="" expand="lg" variant="dark" fixed="top"  style={{ zIndex: 1000 , minHeight: '100px' }}>

                {/* Logo on the right side */}
                <Navbar.Brand>
                    <img
                        src={Logo}
                        className="NabBrand d-inline-block align-top"
                        alt="Your Logo"
                    />
                </Navbar.Brand>

                {/* Menu items on the right side */}
                <Navbar.Toggle className="my-navbar-toggle" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className=" NavMenuItems w-100 justify-content-end">
                        <NavLink className="NavItems" to="/">Home</NavLink>
                        <NavLink className="NavItems" to="/team">Team</NavLink>
                        <NavLink className="NavItems" to="/project">Project</NavLink>
                        <NavLink className="NavItems" to="/testimonial">Testimonial</NavLink>
                        <NavLink className="NavItems" to="/service">Service</NavLink>

                        <NavLink className="NavItems" to="#">
                            <button className="me-3 btn btn-outline-success">Login</button>
                        </NavLink>
                        <NavLink to=""><button className="me-3 btn btn-success">Registration</button></NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>



        </div>

    );
};

export default Header;