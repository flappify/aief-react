import React from 'react';
import NavBar from './Navbar';
import Form from './form';
import Footer from './footer';
class Apply extends React.Component{
    render()
    {
        return(
            <div>
                <NavBar/>
                <Form/>
                <Footer/>
            </div>
        )
    }
}

export default Apply;