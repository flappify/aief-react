import React from 'react';
class Intro extends React.Component{
    render()
    {
        return(
            <div className="intro">
                <div className="left">
                    <div className="top">
                        <h1>New way<br/>to give back</h1>
                        <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price You may see some for as low as each.</p>
                    </div>
                    <div className="bottom">
                        <a></a>
                    </div>
                </div>
                <div className="right">
                    <img src={require('./home-banner-img.jpg')} />
                </div>
            </div>
        )
    }
}

export default Intro;