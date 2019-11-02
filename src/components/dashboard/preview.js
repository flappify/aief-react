import React from 'react';
import {Link} from 'react-router-dom';
import {firestoreConnect } from 'react-redux-firebase';
import {compose} from 'redux';
import {connect} from 'react-redux';
import HelpSummary from '../helpdesk/helpdeskSummary';
import FormSummary from '../form/formSummary';
class Preview extends React.Component{
    
    componentDidMount() {
        
    }
    
    componentWillUnmount() {
    }
    render()
    {
        var total=0,td="0",formListCount=0,helpListCount=0,helpCount=0,formCount=0,eventName="NULL",eventImageURL="NULL",eventSD="NULL",eventDate="NULL";
        const {donations,forms,helps,events}=this.props;
        return(
            <div className="preview-container">
                <div className="first">
                    <div className="top">
                        <div className="total-donation">
                        {donations && donations.map(donation=>{
                            var amt=donation.amount;
                            var amount=parseInt(amt,10);
                            total=total+amount;
                            td=total.toLocaleString('en-IN', {
                            maximumFractionDigits: 2,
                            style: 'currency',
                            currency: 'INR'
                            });
                        })}
                        <div className="donation-icon"><i className="fas fa-rupee-sign"></i></div>
                        <div className="header">
                            <h5>Total Donation</h5>
                            <p>{td}</p>
                        </div>
                        </div>
                        <div className="form-count">
                            {forms && forms.map(form=>{
                                formCount++;
                            })}
                            <div className="form-icon"><i className="fas fa-user-tie"></i></div>
                            <div className="header">
                                <h5>Total Applications</h5>
                                <p>{formCount}</p>
                            </div>
                        </div>
                    </div>
                    <div className="latest-event">
                            {events && events.map(event=>{
                                eventName=event.eventName;
                                eventImageURL=event.url;
                                eventSD=event.eventshDesc;
                                eventDate=event.eventDate;
                            })}
                            <h5>Latest Event</h5>
                            <div className="event-card">
                                <img src={eventImageURL} alt="event" />
                                <h1>{eventName}</h1>
                                <h4>{eventSD}</h4>
                                <h3>{eventDate}</h3>
                            </div>
                    </div>
                </div>
                <div className="second">
                    <div className="help-list-5">
                    <div className="header">
                            {helps && helps.map(help=>{
                                helpCount++;
                            })}
                        <div className="help-icon">
                            <i className="fas fa-hands-helping"></i>
                        </div>
                        <h1>Help Requests</h1>
                        <p>{helpCount}</p>
                    </div>
                    {helps && helps.map(help=>{
                        var hfl=help.name.charAt(0);
                        helpListCount++;
                        if(helpListCount<6){
                            return(
                            <div className="help-card" key={help.id}>
                            <Link to={'/urna/dashboard/helpdesk/'+help.id} key={help.id} style={{ textDecoration: 'none' }}>
                                <div className="help-card-content">
                                    <h1>{hfl}</h1>
                                    <div className="help-detail">
                                        <h5>{help.name}</h5>
                                        <p>{help.subject}</p>
                                    </div>
                                </div>
                            </Link>
                            </div>
                        )
                        }
                    })}
                    </div>
                </div>
                <div className="third">
                <div className="form-list-6">
                        <div className="header">
                            <div className="form-icon">
                                <i className="fas fa-file-signature"></i>
                            </div>
                            <h1>Applications</h1>
                            <p>Recent 6</p>
                        </div>
                        {forms && forms.map(form=>{
                            formListCount++;
                            if(formListCount<6)
                            {
                                return(
                                <div className="form-card" key={form.id}>
                                    <Link to={'/urna/dashboard/application/'+form.id} key={form.id} style={{ textDecoration: 'none' }}>
                                    <div className="form-card-content">
                                        <div className="card-image">
                                            <img src={form.url} alt="profile-picture" />
                                        </div>
                                        <h5>{form.name}</h5>
                                    </div>
                                    </Link>
                                </div>
                            )
                            }
                        })}
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
      donations:state.firestore.ordered.donations,
      events:state.firestore.ordered.events,
      profile:state.firebase.profile
    }
  }
  
  export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'forms',orderBy:['createdAt','desc']},
        {collection:'donations'},
        {collection:'helpDesk'},
        {collection:'events',limit:1,orderBy:['createdAt','desc']},
    ])
  )(Preview)