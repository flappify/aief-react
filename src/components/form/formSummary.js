import React from 'react';
import {Card} from 'react-bootstrap';

const FormSummary=({form})=>{
        return(
            <Card className="form-list-card-content">
                <Card.Img variant="top" src={form.url} className="form-list-card-image"/>
                <Card.Body>
                    <Card.Title className="form-list-card-name">NAME: {form.name}</Card.Title>
                    <Card.Title className="form-list-card-phone">PHONE: {form.phone}</Card.Title>
                    <Card.Title className="form-list-card-email">EMAIL: {form.email}</Card.Title>
                </Card.Body>
            </Card>
        )
}

export default FormSummary;