import React from 'react';

class Intro extends React.Component{
    componentDidMount(){
        
    }
    render()
    {
        return(
            <div className="intro">
                <div className="left introLeft">
                    <div className="top">
                        <h1>New way<br/>to give back</h1>
                        <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price You may see some for as low as each.</p>
                    </div>
                    <div className="bottom">
                        <a href="https://www.youtube.com/watch?v=p29dKpHnPjQ" target="_blank"><img src={require('./video-icon.png')} /><span>Watch our intro video</span></a>
                    </div>
                </div>
                <div className="right">
                    <div className="introImageReveal"></div>
                    <img className="introImage" src={require('./home-banner-img.jpg')}  alt="intro"/>
                </div>
            </div>
        )
    }
}

export default Intro;