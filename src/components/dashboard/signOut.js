import React from 'react';
import {connect} from 'react-redux';
import {signOut} from '../../actions/authActions';
const SignOut=(props)=>{
    return(
        <li><a onClick={props.signOut} href='/'>Log Out</a></li>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        signOut:()=>dispatch(signOut())
    }
}
export default connect(null,mapDispatchToProps)(SignOut);