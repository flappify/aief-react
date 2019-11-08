import React from 'react';
import {TweenLite, Power2} from 'gsap';
import Navbar from './Navbar';

import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect } from 'react-redux-firebase';

import Section2 from './section2';
import Section3 from './section3';
import Section4 from './section4';
import Events from "./events";
import HelpDesk from "./helpdesk";
import SupportSpeak from './supportSpeak';
import GalleryPreview from './galleryPreview';
import Footer from './footer';
import Intro from './intro';


class Home extends React.Component{
    
    componentDidMount(){
        window.onload=function(){
            document.querySelector('.home').style.display="block";
            document.querySelector('.load').style.display="none";
            const left = document.querySelector(".introLeft");
            const introImageReveal = document.querySelector(".introImageReveal");
            const introImage = document.querySelector(".introImage");
            TweenLite.from(left,1, {x:-100,ease:Power2.easeInOut});
            TweenLite.to(introImageReveal,1.4, {width:"0%",ease:Power2.easeInOut});
            TweenLite.from(introImage,1.2, {transform:"scale(1.4)",ease:Power2.easeInOut,delay:0.2});
        }
    }
    render()
    {
        const {events}=this.props;
        return(
            <div>
            <div className="load">
                <div className="divLoader">
                    <svg className="svgLoader" viewBox="0 0 100 100" width="10em" height="10em">
                    <path ng-attr-d="{{config.pathCmd}}" ng-attr-fill="{{config.color}}" stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#F58634" transform="rotate(179.719 50 51)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></path>
                    </svg>
                </div>
            </div>
                <div className="home" style={{display:"none"}} id="home">
                <Navbar/>
                <Intro/>
                <Section2/>
                <Section3/>
                <Section4/>
                <Events events={events}/>
                <HelpDesk/>
                <SupportSpeak/>
                <GalleryPreview/>
                <Footer/>
            </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
      events:state.firestore.ordered.events,
    }
  }
  export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'events',limit:3,orderBy:['createdAt','desc']},
    ])
  )(Home);