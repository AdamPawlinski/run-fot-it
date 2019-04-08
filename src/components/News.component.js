import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import '../styles/News.css';
import news from '../news.json';

const News = () => {
    return (
        <Container className="news-container pt-5 pb-2" fluid> 
            <Row> 
                <Col className="text-center" lg={{span: 8, offset: 2}}> 
                    <h2>Newsy</h2>
                    {
                        news.news.map(
                            item => 
                                <Card className="mt-4" key={item.id} border="info" style={{boxShadow: '0 2px 5px 0 rgba(0,0,0, .25)'}}>
                                    <Card.Header>{item.category}</Card.Header>
                                    <Card.Img variant="left" src={process.env.PUBLIC_URL+item.img} />
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>
                                            {item.text}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>                     
                        )
                    }
                </Col>
            </Row> 
        </Container>
    )
}

export default News;  