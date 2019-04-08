import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Carousel, Image, Button, Card, CardDeck, Jumbotron, Modal, Nav } from 'react-bootstrap';
import '../styles/Main.css';
import pic from '../resources/run_main_pic.jpg';
import map from '../resources/run_map.jpg'; 
import proRun from '../resources/pro-run-start.jpg';
import runners from '../resources/runners.jpg';


const Main = (props) => {
    const [show, modalHandler] = useState(false);

    const handleShow = () => {
        modalHandler(true);
      };

    const handleHide = () => {
        modalHandler(false);
    };

    return (
        <Container style={{marginTop: '-20vh'}} fluid>
            <Row>
                <Carousel interval={6000} controls={false} fade={true} className="w-100"> 
                    <Carousel.Item>
                        <Image
                        className="slide d-block w-100"
                        src={pic}
                        alt="Trasa"
                        fluid                                                
                        />
                        <Button className="carousel-button" variant="primary" size="lg">Zapisz się</Button>
                        <Carousel.Caption>                
                        <h3>Zasmakuj rywalizacji w biegu</h3>
                        <p>Wystartuj w jedynym w Polsce branżowym biegu IT</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                        className="slide d-block w-100"
                        src={pic}
                        alt="Biuro zawodów"
                        fluid
                        />
                        <Button className="carousel-button" variant="success" size="lg" active>Zapisz się</Button>
                        <Carousel.Caption>                
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                        className="slide d-block w-100"
                        src={pic}
                        alt="Zapisz się"
                        fluid
                        />
                        <Button className="carousel-button" variant="danger" size="lg" active>Zapisz się</Button>
                        <Carousel.Caption>                
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>
            <Row className="p-5 mt-5">
                <CardDeck>
                    <Card style={{boxShadow: '0 2px 5px 0 rgba(0,0,0, .25)'}}>
                        <Modal  
                            show={show}                          
                            onHide={handleHide}
                            dialogClassName="modal-90w"
                            aria-labelledby="run-map-large"
                        >
                        <Modal.Header closeButton>
                            <Modal.Title id="run-map-large">
                                Trasa Biegu Run For IT
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Card.Img variant="top" src={map} width="80vw"/>
                        </Modal.Body>
                        </Modal>

                        <Button onClick={handleShow}><Card.Img variant="top" src={map} /></Button>
                        <Card.Body>
                        <Card.Title>Trasa</Card.Title>
                        <Card.Text>
                            Bieg odbędzie się na trasie...
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <NavLink to="/route"><small className="text-muted text-link" onClick={handleShow}>zobacz trasę</small></NavLink>
                        </Card.Footer>
                    </Card>
                    <Card style={{boxShadow: '0 2px 5px 0 rgba(0,0,0, .25)'}}>
                        <Card.Img variant="top" src={proRun} />
                        <Card.Body>
                        <Card.Title>Biuro Zawodów</Card.Title>
                        <Card.Text>
                            Biuro zawodów zlokalizowane jest ... . Będziemy na Ciebie czekać w ... od godziny... di godziny.                           
                            {' '}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <NavLink to="/about"><small className="text-muted">zobacz jak do nas dotrzeć</small></NavLink>
                        </Card.Footer>
                    </Card>
                    <Card style={{boxShadow: '0 2px 5px 0 rgba(0,0,0, .25)'}}>
                        <Card.Img variant="top" src={runners} />
                        <Card.Body>
                        <Card.Title>Zapisy</Card.Title>
                        <Card.Text>
                            Zapisy trwają. Wypełnij formularz i dołącz do biegowej braci IT.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="#"><small className="text-muted">Zapisz się</small></a>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </Row>
            <Row className="pt-5 pb-5 mt-5">
                <Col sm={12}>
                    <Jumbotron fluid>
                        <Container>
                            <Row className="pt-3 pb-3">
                                <Col>
                                <h2>Sponsorzy:</h2>
                                </Col>
                            </Row>
                            <Row className="pt-3 pb-3">
                                <Col>
                                    <h3>Nokia</h3>
                                </Col>
                            </Row>
                            <Row className="pt-3 pb-3">
                                <Col>
                                    <h3>IBM</h3>
                                </Col>
                                <Col>
                                    <h3>HP</h3>
                                </Col>
                                <Col>
                                    <h3>SII</h3>
                                </Col>
                            </Row>                        
                        </Container>
                    </Jumbotron>
                </Col>
            </Row>
        </Container> 
    )
}

export default Main;  