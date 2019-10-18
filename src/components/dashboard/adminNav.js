import React from 'react';
import {connect} from 'react-redux';
import SignOut from './signOut';

class AdminNav extends React.Component{
  state={
    nav:"navbarSmall",
    menu:"nomenu",
    hamburger:"hamburger",
  }
    render()
    {
      const {profile}=this.props;
        return(
          <div>
          <div className={this.state.nav}>
            <div className="menu">
                <div className="menu-list">
                  <ul>
                    <li className="primary-menu"><a href="/urna/dashboard" className="active">Home</a></li>
                    <li className="primary-menu"><a href="/urna/dashboard/form">Forms</a></li>
                    <li className="primary-menu"><a href="/urna/dashboard/donation" className="apply">Donations</a></li>
                    <li className="primary-menu"><a href="/urna/dashboard/helpdesk" className="donate">Helps</a></li>
                    <li className="primary-menu"><a href="/urna/dashboard/CreateEvent" className="donate">Create Event</a></li>
                    <li>
                      <SignOut profile={profile}/>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
           
      </div>   
        )
    }
}
const mapStateToProps=(state)=>{
  return {
      profile:state.firebase.profile
  }
}
export default connect(mapStateToProps)(AdminNav);