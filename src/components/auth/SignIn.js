import React from 'react';
import {connect} from 'react-redux';
import {signIn} from '../../actions/authActions';
import {Redirect} from 'react-router-dom';
import "../dashboard/dashboard.css"
class SignIn extends React.Component{
    state={
        email:'',
        password:''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.signIn(this.state);
    }
    render()
    {
      const {authError,auth}=this.props
      if(auth.uid) return <Redirect to='/urna/dashboard' />
        return(
            <div>
            <div className="login-form-container">
              <div className="login-form">
                    <h1>ADMIN LOGIN</h1>
                  <form onSubmit={this.handleSubmit}>
                          <div className="input-field">
                              <label htmlFor="name">Name</label>
                              <input type="text" id="email" onChange={this.handleChange} required/>
                          </div>
                          <div className="input-field">
                              <label htmlFor="password">Password</label>
                              <input type="password" id="password" onChange={this.handleChange} required/>
                          </div>
                      <div className="submit-button">
                          <button type="submit">LOGIN</button>
                      </div>
                  </form>
                  <div className="login-alert">{authError ? <p>{authError}</p>:null}</div>
                </div>
              </div>
              
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
  return{
      authError:state.auth.authError,
      auth:state.firebase.auth
  }
}
const mapDispathToProps=(dispatch)=>{
  return{
      signIn:(creds)=>dispatch(signIn(creds))
  }
}
export default connect(mapStateToProps,mapDispathToProps)(SignIn);