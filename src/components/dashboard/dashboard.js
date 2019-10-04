import React from 'react';
import AdminNav from './adminNav';
import {Container,Row,Col} from 'react-bootstrap';
import Notification from './notification';
import FormTop from './formTop';
import DonationTop from './donationTop';
import QueriesTop from './queriesTop';
import {connect} from 'react-redux';

class Dashboard extends React.Component{
    render()
    {
      const {helps,forms,donations}=this.props;
        return(
            <div>
                <AdminNav/>
            <Container>
  <Row>
    <Col sm={5}><FormTop forms={forms}/></Col>
    <Col sm={5}><Notification/></Col>
  </Row>
  <Row>
    <Col sm={5}><DonationTop donations={donations}/></Col>
    <Col sm={5}><QueriesTop helps={helps}/></Col>
  </Row>
</Container>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
  return{
    helps:state.help.helps,
    forms:state.form.forms,
    donations:state.donate.donations,
  }
}

export default connect(mapStateToProps)(Dashboard);