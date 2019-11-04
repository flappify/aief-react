import React from 'react';
import NavBar from "./Navbar";
import Donate from './donate';
import Footer from './footer'
import './donate.css'
class Donation extends React.Component{
    componentDidMount(){
        window.onload=function(){
            document.querySelector('.donate').style.display="block";
            document.querySelector('.load').style.display="none";
        }
    }
    render()
    {
        return(
            <div>
                <div className="load">
                    <div className="divLoader">
                        <svg className="svgLoader" viewBox="0 0 100 100" width="10em" height="10em">
                        <path ng-attr-d="{{config.pathCmd}}" ng-attr-fill="{{config.color}}" stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#F58634" transform="rotate(179.719 50 51)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></path>
                        </svg>
                    </div>
                </div>
                <div className="donate" style={{display:"none"}}>
                    <NavBar/>
                    <Donate/>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default Donation;