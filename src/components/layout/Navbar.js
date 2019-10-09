import React from 'react';
import SignedIn from './SignedIn';
import "./layout.css";
class NavBar extends React.Component{
    render()
    {
        return(
            <div className="navbar">
              <div className="og">
                  <div className="og-logo">
                    <img src="https://firebasestorage.googleapis.com/v0/b/aief-d.appspot.com/o/aief%2Flogo%20(1).png?alt=media&token=1684f7d1-4644-441f-8c96-1b02a451b547" alt="Foundation Logo"/>
                  </div>
                  <div className="og-name">
                    <h1>ALL INDIA EKTA FOUNDATION</h1>
                  </div>
              </div>
              <div className="menu">
                  <div className="menu-list">
                    <ul>
                      <li><a href="/">Home</a></li>
                      <li><a href="/about">About</a></li>
                      <li><a href="/works">Works</a></li>
                      <li><a href="/events">Events</a></li>
                      <li><a href="/campaigns">Campaigns</a></li>
                      <li><a href="/contact">Contact Us</a></li>
                      <li><a href="/apply" className="apply">Apply</a></li>
                      <li><a href="/donate" className="donate">Donate</a></li>
                    </ul>
                  </div>
              </div>
            </div>
        )
    }
}
export default NavBar;