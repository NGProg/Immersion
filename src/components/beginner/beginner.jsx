import { Button, Col, Row, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Beginner = () => {

    return (
        <Container fluid="md">
            <card>
                <Row className="justify-content-xs-center">
                    <Col md={{ span: 4, offset: 4 }}>
                        <Image src="images/silhouette.jpg" roundedCircle className="mx-auto d-block my-1" />
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 4, offset: 4 }} className="text-center my-1">
                        Basic Username
                </Col>
                </Row>
                <Row>
                    <Col className="mt-1 mb-2">
                        Hi, My native language is English. I have basic fluency in Spanish.
                </Col>
                </Row>
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <Link to="/chat">
                            <Button variant="primary" type="submit" block size="lg" md={{ span: 4, offset: 4 }}>
                                Let's talk
                            </Button>
                        </Link>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }}>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr></hr>
                    </Col>
                </Row>
            </card>
        </Container>
    );
}

export default Beginner;