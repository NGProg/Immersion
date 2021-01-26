import { Button, Col, Row, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import profiles from '../profile.jsx';

const me = profiles.filter((profile) => {
    return profile.username === "me";
});

const notMe = profile => profile.username !== "me";
const online = profile => profile.status === "online";
const basic = profile => profile.fluency === "basic";
const match = profile => (profile.native === me[0].native && profile.practice === me[0].practice) || 
(profile.native === me[0].practice && profile.practice === me[0].native); 

const profiles1 = profiles.filter(notMe).filter(online).filter(basic).filter(match);

const Beginner = () => {
    return (
        <ProfileCards profile={profiles1} />
    );
}

const ProfileCards = ({ profile }) => {
    return profile.map(profile => (
        <Container fluid="md" key={profile.username}>
            <Row>
                <Col sx={{ span: 3, offset: 0 }}>
                    <Image src={profile.avatar} roundedCircle className="mx-auto d-block my-1" height="50" width="50" />
                </Col>
                <Col sx={{ span: 6, offset: 0 }} className="text-center my-1" line-height="50">
                    {profile.username}
                </Col>
                <Col sx={{ span: 3, offset: 0 }}>
                    <Link to={{
                        pathname: "/chat",
                        data: [profile.username, profile.avatar]}}>
                        <Button variant="link">Let's talk</Button>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col className="mt-1 mb-2">
                    Hi, My native language is {profile.native}. I have basic fluency in {profile.practice}.
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