import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


function Main() {
    return (
        <Container>
            <Row className="px-4 my-5">
                <Col sm={7}>
                    <Image 
                        src="https://picsum.photos/900/400"
                        fluid
                        rounded
                        width={300} 
                    />
                    </Col>
                    <Col sm={5}>
                    <h1 className='font-weigh-light' style={{fontSize: "1.2rem"}}>SleepCare</h1>
                    <p class='mt-4'> This is a chatbot built to answer your questions on sleep hygiene. You can ask me about my purpose, why adopting sleep hygiene is so important and even ask questions to get tailored and personalised answers to improve the quality of your sleep. </p>
                  </Col>
                </Row>
            <Row>
                <Card className="text-center bg-secondary text-white my-2 py-4">
                    <Card.Body>Getting started with SleepCare Chatbot. This chat bot helps you fall asleep faster, sleep deeper and wake up refreshed and energised for the next day!</Card.Body>
                </Card>
                </Row>
                <Row>
                <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://picsum.photos/id/200/320/200" />
                <Card.Body>
                    <Card.Title>Ask questions about sleep</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://picsum.photos/id/201/320/200" />
                <Card.Body>
                    <Card.Title>Manage your repeat prescriptions</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://picsum.photos/id/220/320/200" />
                <Card.Body>
                    <Card.Title>Manage your GP appointments</Card.Title>
                    <Card.Text>
                    Speak directly to one of our staff members to solve your queries.
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://picsum.photos/id/220/320/200" />
                <Card.Body>
                    <Card.Title>Live technical support</Card.Title>
                    <Card.Text>
                    In the event that I can not solve your problem, don't fret about it! Speak directly to one of our staff members to solve your queries.
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Main