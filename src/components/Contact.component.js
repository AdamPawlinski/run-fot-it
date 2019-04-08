import React from 'react';
import '../styles/Contact.css';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';

const About = () => {
    return (
        <Container className="contact-container" fluid>
            <Row>
                <Col lg={{span: 5, offset: 1}} style={{ height: '45vh' }}>
                    <Form className="mb-4 p-2" method="POST" action="https://docs.google.com/forms/d/e/1FAIpQLSeKkrIagpzKpMXm01zPv-sHV-ZajuFaXib-l_3QZsPm0LeE3A/formResponse">
                        <Form.Group className="text-left" controlId="name">
                            <Form.Label>Imię</Form.Label>
                            <Form.Control type="text" name="emailAddress" required/>
                        </Form.Group>
                        <Form.Group className="text-left" controlId="email">
                            <Form.Label>Adres email</Form.Label>
                            <Form.Control type="email" name="entry.2005620554" placeholder="imie@nazwa.com" required/>
                        </Form.Group>
                        <Form.Group className="text-left" controlId="question">
                            <Form.Label>Pytanie</Form.Label>
                            <Form.Control as="textarea" name="entry.839337160" rows="5" required/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col lg="5" className="contact-column">
                    <Card className="contact-card mb-4" style={{ height: '45vh' }}>
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>Kontakt:</Card.Title>
                            <Card.Text>
                                zawody@pro-run.pl,
                                Jacek Urbanowicz – 507 043 081
                            </Card.Text>
                            <Button variant="primary" href="mailto:zawody@pro-run.pl">Wyślij maila</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default About;  