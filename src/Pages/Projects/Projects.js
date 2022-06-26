import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Projects.css'
const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('https://niloydey-portfolio-server.herokuapp.com/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <div className="py-5  project-style">
            <Container>
                <h2 className="text-white">My projects</h2>
                <Row xs={1} md={3} className="g-4 container mx-auto py-5">
                    {
                        projects.map(project => {
                            const { picture, title, live, description, id, technology } = project;
                            return (<Col key={id}>
                                <Card className="card card-style">
                                    <div className="img-container">
                                        <Card.Img variant="top" src={picture} className='image' />
                                    </div>
                                    <Card.Body >
                                        <div className="text-start card-body-style">
                                            <h4 className="fw-bold fs-6">{title}</h4>

                                            <p className=''> {description} </p>
                                            <p> <span className="fw-bold">Technology:</span> <br />{technology} </p>
                                        </div>
                                        <div>

                                            <button className="btn  btn btn-outline-success mx-1">
                                                <a className="text-bold link-style " target="_ blank" href={live}>Live</a>
                                            </button>
                                            <Link to="/projectdetails/:projectID">
                                                <button className="btn btn-success mx-1">Details</button>
                                            </Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>)
                        })
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Projects;
