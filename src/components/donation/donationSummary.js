import React from 'react';
import {Card} from 'react-bootstrap';

const DonationSummary=({donation})=>{
        return(
            <Card >
                <Card.Body>
                    <Card.Title>NAME: {donation.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">AMOUNT: {donation.amount}</Card.Subtitle>
                </Card.Body>
            </Card>
        )
}

export default DonationSummary;