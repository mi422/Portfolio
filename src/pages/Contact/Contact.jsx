import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Contact = () => {
    return (
        <div id="contact">
                <Row>
                  <Col className="d-flex justify-content-center flex-wrap">
                      <div className="m-2">
                          <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer">
                              <Button variant="outline-danger" title="missaomayma@gmail.com">
                              <i className="fas fa-envelope-square"></i> Email Me
                              </Button>
                          </a>
                      </div>
                      <div className="m-2">
                          <a href="https://www.linkedin.com/in/oumayma-missaoui-7b7b241b4/" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline-primary" title="Visit my LinkenIn">
                            <i className="fab fa-linkedin"></i> LinkedIn
                          </Button>
                          </a>
                      </div>
                      <div className="m-2">
                        <a href="https://github.com/mi422" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline-dark" title="My other projects">
                           <i className="fab fa-github-square"></i> GitHub
                        </Button>
                          </a>
                      </div>
                      <div className="m-2">
                         <a href="https://www.facebook.com/missaoui.oumaima.1/" target="_blank" rel="noopener noreferrer">
                         <Button variant="outline-primary" title="my facebook">
                         <i className="fab fa-facebook-square"></i> FaceBook
                         </Button>
                         </a>
                      </div>
                  </Col>
                </Row>            
        </div>
    );
};

export default Contact