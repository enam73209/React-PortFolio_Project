import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Mask from '/public/Mask.svg'
import Mask1 from '/public/Mask1.svg'
import Mask2 from '/public/Mask2.svg'
import Mask3 from '/public/Mask3.svg'
import Mask4 from '/public/Mask4.svg'

const FeaturedProject = () => {
    return (
        <div className="FeaturedProject pb-4">
            <Container>
                <Row className="mt-5">
                    <Col md={4}>
                    <p className="FeaturedProject_Title mt-4">Featured Project</p>
                    <p className="FeaturedProject_Des"> We provide the Perfect Solution to your business growth </p>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col md={6}>
                        <Image src={Mask} fluid />
                        <p>App Design - June 20, 2022</p>
                        <h4>Redesign channel web</h4>
                    </Col>
                    <Col md={6}>
                        <Row>
                            <Col>
                                <Image src={Mask1} fluid />
                                <p>App Design - June 20, 2022</p>
                                <h4>Redesign channel web</h4>
                            </Col>
                            <Col>
                                <Image src={Mask2} fluid />
                                <p>App Design - June 20, 2022</p>
                                <h4>Redesign channel web</h4>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col>
                                <Image src={Mask3} fluid />
                                <p>App Design - June 20, 2022</p>
                                <h4>Redesign channel web</h4>
                            </Col>
                            <Col>
                                <Image src={Mask4} fluid />
                                <p>App Design - June 20, 2022</p>
                                <h4>Redesign channel web</h4>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default FeaturedProject;