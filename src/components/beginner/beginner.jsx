import { Button, Col, Row, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import profiles from '../profile.jsx';
//console.log(profiles);
const Beginner = () => {
    return (
       <ProfileCards profile={profiles} />
    );
}

const ProfileCards = ({ profile }) => {
    return profile.map(profile =>  (
        <Container fluid="md">
                <Row>
                    <Col sx={{ span: 3, offset: 0 }}>
                        <Image src={profile.avatar} roundedCircle className="mx-auto d-block my-1" height="50" width="50" />
                    </Col>
                    <Col sx={{ span: 9, offset: 0 }} className="text-center my-1" line-height="50">
                        {profile.username}
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-1 mb-2">
                        Hi, My native language is {profile.native}. I have {profile.fluency} fluency in {profile.practice}.
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
        </Container>
    ));
}

export default Beginner;