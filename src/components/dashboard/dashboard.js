import React from 'react';
import AdminNav from './adminNav';
import {Container,Row,Col} from 'react-bootstrap';
import Notification from './notification';
import FormTop from './formTop';
import DonationTop from './donationTop';
import QueriesTop from './queriesTop';


class Dashboard extends React.Component{
    render()
    {
        return(
            <div>
                <AdminNav/>
            <Container>
  <Row>
    <Col sm={5}><FormTop/></Col>
    <Col sm={5}><Notification/></Col>
  </Row>
  <Row>
    <Col sm={5}><DonationTop/></Col>
    <Col sm={5}><QueriesTop/></Col>
  </Row>
</Container>
            </div>
        )
    }
}

export default Dashboard;