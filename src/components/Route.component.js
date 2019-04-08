import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import map from '../resources/run_map.jpg'; 

const About = () => {
    return (
        <Container fluid> 
            <Row>
                <Col className="text-justify" lg={{span: 8, offset: 2}}>
                    <Card>
                        <Card.Header>Run For IT - trasa</Card.Header>
                        <Card.Img src={map} />
                        <Card.Body>
                            <Card.Title>Zapoznaj się z trasą naszego biegu</Card.Title>
                            <Card.Text>
                                Trasa przebiega ścieżkami parkowymi i częściowo nawierzchnią asfaltową. 
                                Nie napotkasz na niej dodatkowych niespodzianek i przeszkód a jeśli przyjdziesz z rodziną i znajomymi to z pewnością znajdą dogodne miejsce, w którym będą mogli Cię dopingować.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container> 

    )
}

export default About;  