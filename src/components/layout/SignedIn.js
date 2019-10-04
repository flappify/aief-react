import React from 'react';
import {Nav} from 'react-bootstrap';


class SignedIn extends React.Component{
    render()
    {
        return(
            <div>
                <Nav.Link href="/urna">Admin Control</Nav.Link>
                <Nav.Link href="/urna/dashboard">Dashboard</Nav.Link>
            </div>
        )
    }
}

export default SignedIn;