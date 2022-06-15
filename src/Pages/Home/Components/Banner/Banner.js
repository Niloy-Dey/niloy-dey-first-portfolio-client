import React from 'react';
import './Banner.css';
import { Col, Container, Image, Row, Button } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Banner = () => {
    const github = <FontAwesomeIcon icon={faGithub} size="2x" className="" />;
    const linkedin = <FontAwesomeIcon icon={faLinkedin} size="2x" className="" />;
    const twitter = <FontAwesomeIcon icon={faTwitter} size="2x" className="" />;



    return (
        <div className=" Banner-style">
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <div className="py-5 mt-5 ">
                              <Image  className=" profile-image" src="https://i.ibb.co/4dRsF4y/Niloy.jpg" roundedCircle />
                        </div>

                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <div className="py-3">
                            <h3 className="text-white">
                                Hi, I am <span className="m-logo">
                                   Niloy Dey</span>
                            </h3>

                            <h1 className="text-warning">
                                <Typewriter
                                    words={['Web Developer', 'Reactjs Developer', 'Front-End Developer', 'Back-End Developer']}
                                    loop={0}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}

                                />
                            </h1>
                        </div>

                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <div className="py-3 d-flex justify-content-center ">

                            <div className="d-flex justify-content-center   w-50">
                                <div className="i-Social m-1">
                                    <a className="i-Social-style" target="_blank" rel="noopener noreferrer" href="https://github.com/Niloy-Dey">{github}</a>
                                </div>
                                <div className="i-Social m-1">
                                    <a className="i-Social-style" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/niloy-dey-8b5847221/">{linkedin}</a>
                                </div>
                               
                            </div>
                        </div>

                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <div className="py-3 d-flex justify-content-center ">

                            <div className="d-flex justify-content-center   w-50">
                                <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1eXz-byOZyYVi_S7LcU92pKQw-EJiWUVv/view?usp=sharing">
                                    <Button variant="outline-primary" className="m-1">Resume</Button>
                                </a>
                                <Link to="/contact">
                                    <Button className="m-1">Contact </Button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;