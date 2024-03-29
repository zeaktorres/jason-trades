import React from 'react';
import logo from "./logo.svg";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
function Home(){
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button variant="primary">Start</Button>
        </Card.Body>
        </Card>
    );
}
export default Home