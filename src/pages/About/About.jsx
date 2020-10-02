import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Oumayma from '../../assets/img/profile/oumayma.jpeg';
import './About.css';
import Button from 'react-bootstrap/Button';

const About = () => {
    return (
        <div id='about'>
        <div className='about'>
            <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
            <Container>
                <Row className="pt-3 pb-5 align-items-center">
                    {/* Profile pic */}
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2 ">
                          <Image className="profile justify-content-end" alt="profile"
                           src={Oumayma} thumbnail fluid />
                        </Row>
                    </Col>
                    {/* About Me */}
                    <Col xs={12} md={6}>
                        <Row className=" align-items-start p-2 my-details rounded " >
                            {/* Description */ }
                                        Hi there! I am <strong>&nbsp;Oumayma Missaoui</strong>
                            <br />A passionate programmer, born and brought up in Tunisia. I am a Full Stack Web Developer with React.js,.Net, and MySQL as my tech stack.
                            <br />
                            I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                            <br /> <br />
                            {/* Buttons */}
                            <Col className="d-flex justify-content-center flex-wrap" >
                                <div>
                                    <a href="#contact">
                                        <Button className="m-2" variant="outline-warning">Let's Talk</Button>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://drive.google.com/file/d/1EdFrxN4B3vkRsXwmSsORX82PIYobXm4a/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                    <Button className="m-2" variant="outline-success">
                                        My Resume
                                    </Button>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://github.com/mi422" target="_blank" rel="noopener noreferrer">
                                    <Button className="m-2" variant="outline-dark">
                                        GitHub
                                    </Button>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.linkedin.com/in/oumayma-missaoui-7b7b241b4/" target="_blank" rel="noopener noreferrer">
                                    <Button className="m-2" variant="outline-info">
                                        LinkedIn
                                    </Button>
                                    </a>
                                </div>
                            </Col>
                        </Row>                     
                    </Col>
                </Row>
            </Container>            
        </div>
        </div>
    );
};

export default About
