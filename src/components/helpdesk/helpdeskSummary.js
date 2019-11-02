import React from 'react';
import {Card} from 'react-bootstrap';

const HelpSummary=({help})=>{
        return(
            <Card className="form-list-card-content">
                <Card.Body>
                    <Card.Title className="form-list-card-name">NAME: {help.name}</Card.Title>
                    <Card.Title className="form-list-card-phone">PHONE: {help.phone}</Card.Title>
                    <Card.Title className="form-list-card-email">SUBJECT: {help.subject}</Card.Title>
                    <Card.Title className="form-list-card-email">MESSAGE: {help.message}</Card.Title>
                </Card.Body>
            </Card>
        )
}

export default HelpSummary;