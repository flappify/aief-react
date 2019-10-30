import React from 'react';

class Footer extends React.Component{
    render()
    {
        return(
            <div className="footer">
                <div className="main">
                    <div className="items">
                        <div className="top">
                            <a href="/vision" className="header">ABOUT US</a>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className="bottom">
                            <a href="/vision/#impact">Our Impact</a>
                            <a href="/vision/#impact">Reach & Presence</a>
                            <a href="/vision/#impact">Smilestones</a>
                        </div>
                    </div>
                    <div className="items">
                        <div className="top">
                            <a href="/works" className="header">OUR WORKS</a>
                            <a href="/works/#Education">Education</a>
                            <a href="/vision/#health">Health</a>
                            <a href="/vision/#unity">Unity</a>
                        </div>
                        <div className="bottom">
                            <a href="/campaigns" className="header">CAMPAIGNS</a>
                            <a href="/campaigns/#ecs">Every Child in School</a>
                            <a href="/campaigns/#scf">She Can Fly</a>
                            <a href="/campaigns/hcw">Health Cannot Wait</a>
                        </div>
                    </div>
                    <div className="items">
                        <div className="top">
                            <h1>HOW YOU CAN HELP</h1>
                            <a href="/donation">Donate Online</a>
                            <a href="/donation/other">Other Ways to Donate</a>
                            <a href="/apply">Volunteer with AIEF</a>
                        </div>
                        <div className="bottom">
                            <h1>GET INFORMATION</h1>
                            <a href="/privacypolicy">Privacy Policy</a>
                            <a href="/disclaimer">Disclaimer</a>
                            <a href="/contact">Contact Us</a>
                        </div>
                    </div>
                </div>
                <div className="cr">
                    <h1>&copy; 2019 AIEF. All rights reserved. | Developed & maintained with <a href="https://www.flappify.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-heart"></i></a> by Flappify</h1>
                </div>
            </div>
        )
    }
}

export default Footer;