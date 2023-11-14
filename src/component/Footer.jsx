import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import facebook from '/public/Group32.svg'
import twitter from '/public/Group33.svg'
import linkdin from '/public/Group34.svg'
import insta from '/public/Frame20095.svg'


const Footer = () => {
    return (
        <footer className="footer mt-5 text-white p-3">
            <div className="container">
                <div className="row">
                    {/* Section 1 */}
                    <div className="col-md-4">
                        <ul className="list-unstyled">
                            <li>
                                <h3>WEB LOGO</h3>
                            </li>
                            <li>
                                <p>Copy Some footer text about the Agency. Just a little description to help people understand you better</p>
                            </li>
                            <li className="justify-content-between">
                                <img className="me-2" src={facebook}/>
                                <img className="me-2" src={twitter}/>
                                <img className="me-2" src={linkdin}/>
                                <img className="me-2" src={insta}/>



                            </li>
                        </ul>
                    </div>

                    {/* Section 2 */}
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li>Services</li>
                            <li>Portfolio</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    {/* Section 3 */}
                    <div className="col-md-4">
                        <h5>Address</h5>
                        <p>Design Agency Head Office.<br/>
                            Airport Road
                            United Arab Emirate</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;