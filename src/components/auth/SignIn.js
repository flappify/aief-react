import React from 'react';
import {Link} from 'react-router-dom';

class SignIn extends React.Component{
    render()
    {
        return(
            <Link to="/urna/dashboard">Go to Dashboard</Link>
        )
    }
}

export default SignIn;