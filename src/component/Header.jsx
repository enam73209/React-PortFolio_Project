import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from "react-router-dom";
import { GoogleFonts } from 'google-fonts';


const Header = () => {
    return (
        <div className="row">
            <Navbar fixed={"top"}  collapseOnSelect expand="lg"  className="navbar bg-transparent">
                <div className="col-md-3 mt-2 ">
                    <h4 className="NabBrand">React-Bootstrap</h4>
                </div>
                <div className="col-md-9">
                    <ul className="NavItems list-unstyled mt-4 d-flex justify-content-end">
                        <NavLink to="/"><li className="me-3">Home</li></NavLink>
                        <NavLink to="/service"><li className="me-3">Service</li></NavLink>
                        <NavLink to="/project"><li className="me-3">Projects</li></NavLink>
                        <NavLink to="/testimonial"><li className="me-3">Testimonials</li></NavLink>
                        <li className="me-3"><button className=" me-3 btn btn-outline-success">Login</button></li>
                        <li><button className="me-3 btn btn-success">Registration</button></li>
                    </ul>
                </div>
            </Navbar>
        </div>

    );
};

export default Header;