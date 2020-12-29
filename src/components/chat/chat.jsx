import { Container, Row, Col, Figure, Image } from 'react-bootstrap';
//import logo from './logo.svg';

const Chat = () => {
  return (<Container fluid="md" bg-primary text-white>
    <Row>
      <Col>
        <Figure>
          <Figure.Image
            width={171}
            height={180}
            src='./logo.jpg'
            alt="171x180"
          />
          <Figure.Caption>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
  </Figure.Caption>
        </Figure>

      <Image src="logo.jpg" rounded />
    
      <Image src="holder.js/171x180" roundedCircle />
    
      <Image src="holder.js/171x180" thumbnail />

      </Col>
    </Row>
  </Container>
  );
}

export default Chat;