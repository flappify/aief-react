import React from 'react';
import {connect} from 'react-redux';
class SignedIn extends React.Component{
    render()
    {
        const {auth}=this.props
        if(auth.uid){
            return(
                <li><a href="/urna" style={{color:"crimson"}}>Admin Control</a></li>
            )
        }
        else{
            return null;
        }
    }
}
const mapStateToProps=(state)=>{
    return{
        auth:state.firebase.auth
    }
}
export default connect(mapStateToProps)(SignedIn);