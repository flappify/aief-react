import React from 'react';
import {Card} from 'react-bootstrap';
class DonationTop extends React.Component{
    render()
    {
        return(
            <div>
                <h1>Donations</h1>
                <Card >
                <Card.Body>
                    <Card.Title>Name</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Amount</Card.Subtitle>
                    <Card.Text>Date</Card.Text>
                </Card.Body>
            </Card>
            <Card >
            <Card.Body>
                <Card.Title>Name</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Amount</Card.Subtitle>
                <Card.Text>Date</Card.Text>
            </Card.Body>
        </Card>
        <Card >
        <Card.Body>
            <Card.Title>Name</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Amount</Card.Subtitle>
            <Card.Text>Date</Card.Text>
        </Card.Body>
    </Card>
            </div>
        )
    }
}

export default DonationTop;