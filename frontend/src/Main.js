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
                <Col sm={6}>
                    <Image 
                        src="https://media.istockphoto.com/photos/futuristic-glowing-blue-neon-dialog-symbol-on-black-dark-background-picture-id1297855320?k=20&m=1297855320&s=612x612&w=0&h=JKdQj6XoNvbBwhqMxv0hF8B7uDsqFioUkP-lYD6y9rs="
                        fluid
                        rounded
                        className='sleepbot'
                        width={400}
                    />
                    </Col>
                    <Col sm={5}>
                    <h1 className='font-weigh-light' style={{fontSize: "1.2rem"}}>Dr Doze - SleepBot </h1>
                    <p class='mt-2'> I'm a chatbot assistant that aims to provide you with personalised advice to improve the quality of your sleep. You can start talking to me by clicking on my pop-up icon located in the bottom right hand corner of the site.</p>
                    
                    </Col>
                </Row>
            <Row>
                <Card className="text-center bg-secondary text-white my-2 py-4">
                    <Card.Body>Depending on your sleeping goals, Dr Doze will provide you tips and tricks to help you fall asleep faster, sleep deeper and wake up refreshed and energised for the next day!</Card.Body>
                </Card>
                </Row>
                <Row>
                <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://img.freepik.com/premium-vector/doctor-online-concept-female-holding-her-hand-smartphone-talking-doctor-using-app-chat_262362-97.jpg" />
                <Card.Body>
                    <Card.Title>Ask questions about sleep</Card.Title>
                    <Card.Text>
                    You can ask me all sorts of questions about common causes of sleeping problems.
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://as1.ftcdn.net/v2/jpg/02/01/38/00/1000_F_201380017_cNP9520EXzGG3xPUsGkSZvqxcFQsB5Ae.jpg" />
                <Card.Body>
                    <Card.Title>Healthcare services</Card.Title>
                    <Card.Text>
                    Dr Doze can also manage your repeat prescriptions from your local GP.
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://img.freepik.com/free-vector/isometric-icon-with-online-medical-care-service-chatbot-talking-people-3d_1284-63041.jpg?w=740&t=st=1660437451~exp=1660438051~hmac=aa66d1aa2530557403aa9ccef63745c1b535c737b8bc9cddac37e09200b86e87" />
                <Card.Body>
                    <Card.Title>Live technical support</Card.Title>
                    <Card.Text>
                    If I fail to understand you, you can always speak directly to one of our staff members.
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Main