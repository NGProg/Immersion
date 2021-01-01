import { Image, Button, Col, Row, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Advanced = () => {

    return (
        <Container fluid="md">
            <card>
                <Row className="justify-content-xs-center">
                    <Col md={{ span: 4, offset: 4 }}>
                        <Image src="images/silhouette.jpg" roundedCircle className="mx-auto d-block my-1"/>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 4, offset: 4 }} className="text-center my-1">
                        Fluent Username
                </Col>
                </Row>
                <Row>
                    <Col className = "mt-1 mb-2">
                        Hi, My native language is English. I am fluent in Spanish.
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

export default Advanced;