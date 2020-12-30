import { Tabs, Tab } from 'react-bootstrap';
import { useState } from 'react';

const Join = () => {
    const [key, setKey] = useState('beginner');
  
    return (
      <Tabs
        id="joinChat"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="beginner" title="Beginner">
          <p>This is for beginners</p>
        </Tab>
        <Tab eventKey="intermediate" title="Intermediate">
        <p>This is for Intermediate</p>
        </Tab>
        <Tab eventKey="advanced" title="Advanced">
        <p>This is for Advanced</p>
        </Tab>
      </Tabs>
    );
  }

export default Join;