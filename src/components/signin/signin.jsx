import { Form, Button } from 'react-bootstrap';

function SignIn() {
    return (<h1><Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <br></br>
        <Form.Text className="text-muted">
            or
          </Form.Text>
        <Button variant="link">Sign up</Button>
      </Form></h1>
        );
  }

  export default SignIn;