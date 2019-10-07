import React from 'react';
import Navbar from './Navbar';
import Events from "./events";
class Home extends React.Component{
    render()
    {
        return(
            <div>
                <Navbar/>
                <Events/>
            </div>
        )
    }
}

export default Home;