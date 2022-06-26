import React from 'react';
import { Col, Container, Image, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import niloy from '../../../../Assets/Images/Profile/Niloy.jpeg'

const AboutMe = () => {
    return (
        <div className="pt-5 aboutme-style bg-dark ">
            <Container>
                <h1 className="pt-5 mt-5 text-warning">About Me</h1>
                <Row>
                    <Col>
                        <div className="py-5  ">
                            <Image  className="p-5 profile-image" src="https://i.ibb.co/4dRsF4y/Niloy.jpg" roundedCircle />

                        </div>
                    </Col>
                    <Col className="py-5 mt-5">
                        <div className=" d-flex justify-content-center align-items-center flex-column">
                            <h3 className="text-white text-start fw-normal">
                                Hi, I'm Niloy Dey. I'm a CSE (Computer Science & Engineering)  student. I have learned the basics of MERN Stack Development. And I'm currently seeking an internship or junior full-stack web developer job. I'm a quick learner and I love to learn and apply new things. I always enjoy teamwork.

                            </h3>
                        </div>
                        <Link className="py-3 text-start d-flex justify-content-start align-items-center" to="/about">
                            <Button className="mt-0 ">About Me</Button>
                        </Link>

                    </Col>
                </Row>

            </Container>
        </div>


    );
};

export default AboutMe;