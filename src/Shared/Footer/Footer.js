import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-dark pt-5 m-0 pb-1">
            <Container>
                <footer>
                    <Row xs={1} md={4} className="g-4">
                        <Col className="text-white text-start">
                            <h4 className="pb-3">Top Projects</h4>
                            <div>
                                <p className="m-0 pt-1">Bike Website</p>
                                <p className="m-0 pt-1">Tourist Website</p>
                                <p className="m-0 pt-1">Healthcare Website</p>

                            </div>
                        </Col>
                        <Col className="text-white text-start">
                            <h4 className="pb-3">Quick Links</h4>
                            <div>
                                <p className="m-0 pt-1">Home</p>
                                <p className="m-0 pt-1">Projects</p>
                                <p className="m-0 pt-1">About Me</p>
                                <p className="m-0 pt-1">Contact Me</p>
                            </div>
                        </Col>
                        <Col className="text-white text-start">
                            <h4 className="pb-3">Social Media</h4>
                            <div>
                                <a className="m-0 pt-1 text-white text-decoration-none" target="_blank" href='https://github.com/Niloy-Dey '>Github</a> <br />
                                <a className="m-0 pt-1 text-white text-decoration-none" target="_blank"  href='https://www.linkedin.com/in/niloy-dey-8b5847221/ '>Linked in</a>
                            </div>
                        </Col>
                        <Col className="text-white text-start">
                            <h4 className="pb-3 m-logo" >Niloy Dey</h4>
                            <div>
                                <p className="m-0 pt-1">Uttar Sunder Pur, Bhujpur, Fatickchary<br />Chattogram, Bangladesh.</p>
                                <p className="m-0 pt-1">+8801822114359</p>
                                <p className="m-0 pt-1">niloydeyce@gmail.com</p>
                            </div>
                        </Col>

                    </Row>

                    <h6 className="text-muted pt-5 pb-1">Copyright &copy; 2022 Niloy Dey</h6>
                </footer>
            </Container>
        </div>
    );
};

export default Footer;