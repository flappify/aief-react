import React from 'react';
import {Card} from 'react-bootstrap';

class FormSummary extends React.Component{
    render()
    {
        return(
            <Card >
                <Card.Body>
                    <Card.Title>Name</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Amount</Card.Subtitle>
                    <Card.Text>Date</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default FormSummary;