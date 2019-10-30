import React from 'react';
import NavBar from "./Navbar";
import Donate from './donate';
import Footer from './footer'
import './donate.css'
class Donation extends React.Component{
 
    render()
    {
        return(
            <div>
                <NavBar/>
                <Donate/>
                <Footer/>
            </div>
        )
    }
}

export default Donation;