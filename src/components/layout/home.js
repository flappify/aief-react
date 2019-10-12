import React from 'react';
import Navbar from './Navbar';

import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect } from 'react-redux-firebase';

import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import Section4 from './section4';
import Events from "./events";
import Awards from './awards';
import SupportSpeak from './supportSpeak';


class Home extends React.Component{
    render()
    {
        const {events}=this.props;
        return(
            <div>
                <Navbar/>
                <Section1/>
                <Section2/>
                <Section3/>
                <Section4/>
                <Events events={events}/>
                <Awards/>
                <SupportSpeak/>
                
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