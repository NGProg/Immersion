import { Container, Row, Col } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function hasUserMedia() {
    //check if the browser supports the WebRTC 
    return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia);
}

const Comms = () => {

    useEffect(() => {
        if (hasUserMedia()) {
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia
                || navigator.mozGetUserMedia;

            //enabling video and audio channels 
            navigator.getUserMedia({ video: true, audio: true }, function (stream) {
                var video = document.querySelector('video');

                //inserting our stream to the video tag     

                video.srcObject = stream;
            }, function (err) { });
        } else {
            alert("WebRTC is not supported");
        }
    }, []);

    return (
        <Container fluid="md">
            <Row className="justify-content-xs-center">
                <Col md={{ span: 4, offset: 4 }}>
                    <video autoPlay controls muted width="100%" />
                </Col>
            </Row>
        </Container>
    );
}

export default Comms;