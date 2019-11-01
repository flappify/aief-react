import React from 'react';
import AdminNav from './adminNav';
import {Container,Row,Col} from 'react-bootstrap';
import SignOut from './signOut';
import Preview from './preview';
import Notification from './notification';
import FormTop from './formTop';
import DonationTop from './donationTop';
import QueriesTop from './queriesTop';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {firestoreConnect } from 'react-redux-firebase';
import {compose} from 'redux';
import "./dashboard.css";
class Dashboard extends React.Component{
      state={
        tab:"tab",
        activetab:"tab-selected",
        hide:"none",
        show:"flex",
        tab1:"tab-selected",
        tab2:"tab",
        tab3:"tab",
        tab4:"tab",
        tab1detail:"tab-detail-selected",
        tab2detail:"tab-detail",
        tab3detail:"tab-detail",
        tab4detail:"tab-detail",
        sidebar:"show-tab-name",
        }

        handleShow=()=>{
          if(this.state.sidebar==="show-tab-name")
          {
              this.setState(() => ({
                sidebar:"hide-tab-name",
              }));
              document.querySelector(".tab-text-1").style.display="none";
              document.querySelector(".tab-text-2").style.display="none";
              document.querySelector(".tab-text-3").style.display="none";
              document.querySelector(".tab-text-4").style.display="none";
              document.querySelector(".dashboard-sidebar").style.width="5.5vw";
          }
          else{
            this.setState(() => ({
              sidebar:"show-tab-name",
            }));
            document.querySelector(".tab-text-1").style.display="block";
            document.querySelector(".tab-text-2").style.display="block";
            document.querySelector(".tab-text-3").style.display="block";
            document.querySelector(".tab-text-4").style.display="block";
            document.querySelector(".dashboard-sidebar").style.width="20vw";
          }
          console.log(this.state);
        }
        
        handleShow1=()=>{
          if(this.state.tab1==="tab")
          {
              this.setState(() => ({
                  tab1:"tab-selected",
                  tab2:"tab",
                  tab3:"tab",
                  tab4:"tab",
                  tab1detail:"tab-detail-selected",
                  tab2detail:"tab-detail",
                  tab3detail:"tab-detail",
                  tab4detail:"tab-detail",
              }));
          }
          console.log(this.state);
      }
      handleShow2=()=>{
          if(this.state.tab2==="tab")
          {
              this.setState(() => ({
                  tab1:"tab",
                  tab2:"tab-selected",
                  tab3:"tab",
                  tab4:"tab",
                  tab1detail:"tab-detail",
                  tab2detail:"tab-detail-selected",
                  tab3detail:"tab-detail",
                  tab4detail:"tab-detail",
              }));
          }
          console.log(this.state);
      }
      handleShow3=()=>{
          if(this.state.tab3==="tab")
          {
              this.setState(() => ({
                  tab1:"tab",
                  tab2:"tab",
                  tab4:"tab",
                  tab3:"tab-selected",
                  tab1detail:"tab-detail",
                  tab2detail:"tab-detail",
                  tab3detail:"tab-detail-selected",
                  tab4detail:"tab-detail",
              }));
          }
          console.log(this.state);
      }
      handleShow4=()=>{
        if(this.state.tab4==="tab")
        {
            this.setState(() => ({
                tab1:"tab",
                tab2:"tab",
                tab4:"tab-selected",
                tab3:"tab",
                tab1detail:"tab-detail",
                tab2detail:"tab-detail",
                tab4detail:"tab-detail-selected",
                tab3detail:"tab-detail",
            }));
        }
        console.log(this.state);
    }
    render()
    {
      const {auth,profile,helps,forms,donations}=this.props;
      if(!auth.uid) return <Redirect to='/urna' />
        return(
            <div>
              {/*<AdminNav/>*/}
              <div className="dashboard-container">
                <div className="dashboard-sidebar">
                  <div className={this.state.sidebar} onClick={this.handleShow}><h1><i className="fas fa-caret-square-left"></i></h1></div>
                  <div className={this.state.tab1} onClick={this.handleShow1}><h1><i className="fas fa-border-all"></i><span className="tab-text-1">Dashboard</span></h1></div>
                  <div className={this.state.tab2} onClick={this.handleShow2}><h1><i className="fas fa-hand-holding-usd"></i><span className="tab-text-2">Donations</span></h1></div>
                  <div className={this.state.tab3} onClick={this.handleShow3}><h1><i className="fab fa-wpforms"></i><span className="tab-text-3">Applicants</span></h1></div>
                  <div className={this.state.tab4} onClick={this.handleShow4}><h1><i className="fab fa-elementor"></i><span className="tab-text-4">Event Creation</span></h1></div>
                  <div className="sign-out"><SignOut profile={profile}/></div>
                </div>
                <div className="dashboard-content">
                  <Preview/>
                  {/* <Container>
                    <Row>
                      <Col sm={10}><FormTop forms={forms}/></Col>
                      <Col sm={10}><Notification/></Col>
                    </Row>
                    <Row>
                      <Col sm={10}><DonationTop donations={donations}/></Col>
                      <Col sm={10}><QueriesTop helps={helps}/></Col>
                    </Row>
                  </Container>*/}
                </div>
              </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
  return{
    auth:state.firebase.auth,
    helps:state.firestore.ordered.helpDesk,
    forms:state.firestore.ordered.forms,
    donations:state.donate.donations,
    profile:state.firebase.profile
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
      {collection:'forms',limit:3,orderBy:['createdAt','desc']},
      {collection:'donations',orderBy:['createdAt','desc']},
      {collection:'helpDesk',limit:3,orderBy:['dateTime','desc']},
  ])
)(Dashboard)