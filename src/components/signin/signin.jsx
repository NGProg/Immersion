import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SignIn() {

  return (<Container fluid = "md">
    <Form className="border border-danger">

      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={{ span: 6, offset: 3 }}>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      </Col>
      </Row>

      <Row >
        <Col md={{ span: 2, offset: 5 }}>
      <Link to="/join">
        <Button variant="primary" type="submit" block size="lg" md={{ span: 2, offset: 5 }}> 
          SIGN IN
        </Button>
      </Link>
      </Col>
      </Row>

      <Row>
        <Col xs={{ span: 2, offset: 5 }}>
      <Form.Text className="text-center">
        or
          </Form.Text>
          </Col>
      </Row>

      <Row>
        <Col md={{ span: 2, offset: 5 }}>
      <Link to="/signup">
        <Button variant="link" block>SIGN UP</Button>
      </Link>
      </Col>
      </Row>

    </Form>
  </Container>
  );
}

export default SignIn;