import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Comms from '../comms/comms.jsx';
//import { useEffect, useRef } from 'react';


const Chat = (props) => {
  const { data } = props.location;
  return (
    <Container fluid="md">
        <Row className="justify-content-xs-center">
          <Col md={{ span: 4, offset: 4 }}>
            <Image src={data[1]} roundedCircle className="mx-auto d-block my-1" />
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 4 }} className="text-center my-1">
            {data[0]}
        </Col>
        </Row>
        <Comms />
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <Link to="/chat">
              <Button variant="primary" type="submit" block size="lg" md={{ span: 4, offset: 4 }}>
                Let's talk
                    </Button>
            </Link>
          </Col>
        </Row>
    </Container>
  );
}

export default Chat;