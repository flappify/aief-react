import React from 'react';
import {connect} from 'react-redux';
import {createHelpDesk} from '../../actions/helpDeskActions';
class HelpDesk extends React.Component{

    state={
        name:"",
        phone:"",
        message:"",
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        });
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.createHelpDesk(this.state);
        console.log(this.state);
    }

    render()
    {
        const {submitError}=this.props;
        return(
            <div className="helpdesk" id="helpdesk">
                <div className="main">
                    <div className="left">
                        <h1>GET IN TOUCH</h1>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-first">
                                <div className="input-field">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" onChange={this.handleChange} required/>
                                </div>
                                <div className="input-field">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="text" id="phone" onChange={this.handleChange} required/>
                                </div>
                            </div>
                            <div className="form-last">
                                <div className="input-field">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" onChange={this.handleChange} required/>
                                </div>
                            </div>
                            <div className="submit-button">
                                <button type="submit" >SEND</button>
                            </div>
                        </form>
                        <div className="alert">{submitError ? <p>{submitError}</p>:null}</div>
                    </div>
                    <div className="right">
                        <h1>FOLLOW</h1>
                        <div className="social">
                            <div className="social-icon">
                                <a href="https://stackoverflow.com/questions/15865982/it-is-possible-to-expand-a-textarea-only-with-css" target="_blank"><i className="fab fa-instagram"></i></a>
                            </div>
                            <div className="social-icon">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                            </div>
                            <div className="social-icon">
                                <a href="#"><i className="fab fa-twitter"></i></a>
                            </div>
                            <div className="social-icon">
                                <a href="#"><i className="fab fa-youtube"></i></a>
                            </div>
                            <div className="social-icon">
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        submitError:state.help.submitError
    }
  }
const mapDispatchToProps = (dispatch)=>{
    return{
        createHelpDesk:(helpDesk)=>dispatch(createHelpDesk(helpDesk))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HelpDesk);