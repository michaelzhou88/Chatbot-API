import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Main() {
    return (
        <Container>
            <Row className="px-4 my-5">
                <Col sm={7}>
                    <Image 
                        src="https://dummyimage.com/900x400/dee2e6/6c757d/jpg"
                        fluid
                        rounded
                        />
                </Col>
                <Col sm={5}/>
                <h1 className='font-weigh-light' style={{fontSize: "1.2rem"}}>SleepCare</h1>
                    <p class='mt-4'> This is an artificially intelligent chatbot built to answer your questions on sleep hygiene. Ask questions and get tailored and personalised answers to improve the quality of your sleep. </p>
                    <Button> Find out more! </Button>
            </Row>
            <Row>
                <Card className="text-center bg-secondary text-white my-5 py-4">
                    <Card.Body>Getting started with SleepCare Chatbot. This chat bot helps you fall asleep faster, sleep deeper and wake up refreshed and energised for the next day!</Card.Body>
                </Card>
                </Row>
                <Row>
                <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://picsum.photos/id/200/320/200" />
                <Card.Body>
                    <Card.Title>How It Works</Card.Title>
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
                    <Card.Title>Order Repeat Prescription</Card.Title>
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
                    <Card.Title>Suport</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Main