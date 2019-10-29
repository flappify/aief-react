import React from 'react';
import SignedIn from './SignedIn';
import "./layout.css";

class NavBar extends React.Component{
    state={
      nav:"navbar",
      menu:"nomenu",
      hamburger:"hamburger",
      currentScroll:"0",
      height:"0"
    }
  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }
  
  handleScroll=()=> {
      const currentScroll=window.pageYOffset;
      const height=document.documentElement.scrollHeight;
      this.setState(()=>({
          currentScroll:currentScroll,
          height:height
      }));
      if(currentScroll>200)
      {
        this.setState(()=>({
          nav:"navbarSmall"
      }));
      }
      else{
        this.setState(()=>({
          nav:"navbar"
      }));
      }
      console.log(this.state);
  }
    handleMenu=(e)=>{
      e.preventDefault();
      if(this.state.menu==="nomenu")
      {
        this.setState({
          menu:"nomenu fullmenu",
          hamburger:"hamburger hamburger-open"
        });
      }
      else{
        this.setState({
          menu:"nomenu",
          hamburger:"hamburger"
        });
      }
    }
    render()
    {
        return(
          <div>
            <div className={this.state.nav}>
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
                      <li className="primary-menu"><a href="/">Home</a></li>
                      <li className="primary-menu"><a href="/vision">Vision</a></li>
                      <li className="primary-menu"><a href="/apply" className="apply">Apply</a></li>
                      <li className="primary-menu"><a href="/donate" className="donate">Donate</a></li>
                      <li>
                        <div className={this.state.hamburger} onClick={this.handleMenu}>
                          <div className="line-1"></div>
                          <div className="line-2"></div>
                        </div>
                      </li>
                    </ul>
                  </div>
              </div>
            </div>
            <div className={this.state.menu}>
              <ul>
               <li><a href="/works">Works</a></li>
               <li><a href="/events">Events</a></li>
               <li><a href="/campaign">Campaigns</a></li>
               <li><a href="#helpdesk">Help Desk</a></li>
               <SignedIn/>
             </ul>
           </div>
        </div>   
        )
    }
}
export default NavBar;