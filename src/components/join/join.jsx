import { Tabs, Tab, Container, Col, Row } from 'react-bootstrap';
import { useState } from 'react';

import Beginner from '../beginner/beginner.jsx';
import Intermediate from '../intermediate/intermediate.jsx';
import Advanced from '../advanced/advanced.jsx';

const Join = () => {
    const [key, setKey] = useState('basic');
  
    return (
      <Container fluid ="md">
        <Row>
        <Col md={{ span: 6, offset: 3 }}>
      <Tabs
        id="joinChat"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="basic" title="Basic">
          <Beginner />
        </Tab>
        <Tab eventKey="intermediate" title="Intermediate">
        <Intermediate />
        </Tab>
        <Tab eventKey="fluent" title="Fluent">
        <Advanced />
        </Tab>
      </Tabs>
      </Col>
      </Row>
      </Container>
    );
  }

export default Join;