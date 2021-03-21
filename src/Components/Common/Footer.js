import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <>
            <div className="bg">
            <Container>
                <Row className="mt-5 pt-5 pb-5">
                    <Col lg={3} md={6} sm={6} xm={4}>
                        <h4 className="mb-3">About Company</h4>
                        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae est nihil, molestias fuga eveniet totam dignissimos reiciendis sequi obcaecati accusamus eaque, placeat ipsum doloremque ad laudantium libero velit amet maiores?</p>
                        <div className="social">
                            <i class="fab fa-facebook-square"></i>
                            <i class="fab fa-youtube-square"></i>
                            <i class="fab fa-twitter-square"></i>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={6} xm={4}>
                        <h4>The Company</h4>
                        <li className=""><a href="">About us</a></li>
                        <li className=""><a href="">Contact us</a></li>
                        <li className=""> <a href="">Our Team</a></li>
                        <h6>Address</h6>
                        <p>268/A, Middle Pirerbag, Mirpur-1, Dhaka-1205</p>
                    </Col>
                    <Col lg={3} md={6} sm={6} xm={4}>
                        <h4 className="mb-3">More Info</h4>
                        <li className=""><a href="">How to Product Purchase</a></li>
                        <li className=""><a href="">Privacy Policy</a></li>
                        <li className=""> <a href="">Refund Policy</a></li>
                    </Col>
                    <Col lg={3} md={6} sm={6} xm={4}>
                        <h4 className="mb-3">Download App</h4>

                    </Col>
                </Row>
            </Container>
        </div>
        <div className="footer-copyright-bg">
            <Container>
            <p>	&#169; copyright 2020 by ecome express</p>
            </Container>
        </div>
        </>
    );
};

export default Footer;