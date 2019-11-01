import React from 'react';
import NavBar from './Navbar';
import Footer from './footer';
import './vision.css'
class Vision extends React.Component{
    render()
    {
        return(
            <div>
                <NavBar/>
                <div className="vision-container">
                    <div className="vision-wwa">
                        <div class="image">
                            <img src="https://baptistandreflector.org/wp-content/uploads/2017/02/Cooperation-e1487254527462.jpg" />
                        </div>
                        <div className="details">
                            <h5>Since<span>2019</span></h5>
                            <h1>About AIEF</h1>
                            <p>We see equal value in all lives. And so we are dedicated to improving the quality of life for individuals around the world. From the education of students in Chicago, to the health of a young mother in Nigeria, we are catalysts of human promise everywhere.</p>
                        </div>
                    </div>
                    <div className="vision-wwd">
                        <h1>What We Do</h1>
                        <p>We work with partners worldwide to tackle critical problems in five program areas. Our Global Health Division aims to reduce inequities in health by developing new tools and strategies to reduce the burden of infectious disease and the leading causes of child mortality in developing countries. Our Global Development Division focuses on improving the delivery of high-impact health products and services to the world’s poorest communities and helps countries expand access to health coverage. Our Global Growth & Opportunity division focuses on creating and scaling market-based innovations to stimulate inclusive and sustainable economic growth. Our United States Division works to improve U.S. high school and postsecondary education, and support vulnerable children and families in Washington State. And our Global Policy & Advocacy Division seeks to build strategic relationships and promote policies that will help advance our work. Our approach to grantmaking in all five areas emphasizes collaboration, innovation, risk-taking, and, most importantly, results.</p>
                    </div>
                    <div className="quote-container">
                        <div className="quote1">
                            <h1>WHATEVER THE CONDITIONS OF PEOPLE’S LIVES, WHEREVER THEY LIVE, HOWEVER THEY LIVE, WE ALL SHARE THE SAME DREAMS.
                            <span>- MELINDA GATES</span></h1>
                        </div>
                    </div>
                    <div className="vision-hwd">
                        <h1>How We Do</h1>
                        <p>
                        To bring about the kinds of changes that will help people live healthier and more productive lives, we seek to understand the world’s inequities. Whether the challenge is low-yield crops in Africa or low graduation rates in Los Angeles, we listen and learn so we can identify pressing problems that get too little attention. Then we consider whether we can make a meaningful difference with our influence and our investments, whether it is a grant or a contract.

All of our strategies—more than two dozen across the foundation—have emerged through this process of identifying what we want to accomplish for people and where we can have the greatest impact. Once we commit to an area of need, we define our major goals and identify a clear path to achieving them.
                        </p>
                    </div>
                    <div className="vision-www">
                        <h1>Where We Work</h1>
                        <p>
                        Our work depends on grantees and partners across the United States and in more than 100 countries who have on-the-ground expertise, a deep understanding of the issues we care about, and strong ties with the communities in which we aim to make a difference. At the same time, we have learned the value of having foundation representatives based in key regions<br/>— to help us build relationships with partner organizations and governments, better understand the policy environment, and remain culturally sensitive.
                        </p>
                    </div>
                    <div className="vision-gi">

                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Vision;