import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../styles/Footer.css';
import facebook from '../resources/facebook-square-brands.svg';
import youtube from '../resources/youtube-square-brands.svg';
import instagram from '../resources/instagram-brands.svg';
import twitter from '../resources/twitter-square-brands.svg';

const Footer = () => {
    return (
        <Container className="footer mt-5 pt-5pb-5" fluid> 
            <Row>
                <Col lg={{span: 2, offset: 2}}>
                    <a href="#">
                        <Image className="footer-img-social m-2" width="50vw" src={facebook}/>
                    </a>
                </Col>
                <Col lg={2}>
                    <a href="#">
                        <Image className="footer-img-social m-2" width="50vw" src={youtube}/>
                    </a>
                </Col>
                <Col lg={2}>
                    <a href="#">
                        <Image className="footer-img-social m-2" width="50vw" src={instagram}/>
                    </a>
                </Col>
                <Col lg={2}>
                    <a href="#">
                        <Image className="footer-img-social m-2" width="50vw" src={twitter} />
                    </a>
                </Col>
            </Row>
            <Row className="pt-5">
                <Col lg={{span: 4, offset: 4}}>
                    <p>
                        Prawa autorskie Pro-Run Wrocław
                    </p>
                </Col>                
            </Row> 
        </Container>
    )
}

export default Footer;  