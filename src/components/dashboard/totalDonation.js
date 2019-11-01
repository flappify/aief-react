import React from 'react';
import {Card} from 'react-bootstrap';

const TotalDonation=({donation})=>{
        return(
            <Card >
                <Card.Body>
                    <Card.Title>{donation.amount}</Card.Title>
                    <Card.Text>Date:</Card.Text>
                </Card.Body>
            </Card>
        )
}

export default TotalDonation;