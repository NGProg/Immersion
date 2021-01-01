import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SignUp() {

  return (<Container fluid="md">
    <Form className="border border-danger">

      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form.Group controlId="formBasicUserName">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="User Name" />
          </Form.Group>
        </Col>
      </Row>

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
          <Form.Group controlId="formBasicEmail1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Re-enter email" />
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

      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form.Group controlId="formBasicPassword1">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Re-enter password" />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form.Group controlId="native">
            <Form.Label>Native Language</Form.Label>
            <Form.Control as="select">
              <option>English</option>
              <option>Spanish</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form.Group controlId="Practice">
            <Form.Label>Practice Language</Form.Label>
            <Form.Control as="select">
              <option>English</option>
              <option>Spanish</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form.Group controlId="fluency">
            <Form.Label>Fluency</Form.Label>
            <Form.Control as="select">
              <option>Basic</option>
              <option>Intermediate</option>
              <option>Fluent</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      <Row >
        <Col md={{ span: 2, offset: 5 }}>
          <Link to="/join">
            <Button variant="primary" type="submit" block size="lg" md={{ span: 2, offset: 5 }}>
              SIGN UP
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
          <Link to="/">
            <Button variant="link" block>SIGN IN</Button>
          </Link>
        </Col>
      </Row>

    </Form>
  </Container>
  );
}

export default SignUp;