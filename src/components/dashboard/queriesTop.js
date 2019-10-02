import React from 'react';
import {Card} from 'react-bootstrap';
class QueriesTop extends React.Component{
    render()
    {
        return(
            <div>
                <h1>Queries</h1>
                <Card >
                <Card.Body>
                    <Card.Title>Name</Card.Title>
                    <Card.Text>Date</Card.Text>
                </Card.Body>
            </Card>
            <Card >
            <Card.Body>
                <Card.Title>Name</Card.Title>
                <Card.Text>Date</Card.Text>
            </Card.Body>
        </Card>
        <Card >
        <Card.Body>
            <Card.Title>Name</Card.Title>
            <Card.Text>Date</Card.Text>
        </Card.Body>
    </Card>
            </div>
        )
    }
}

export default QueriesTop;