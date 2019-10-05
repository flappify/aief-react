import React from 'react';
import {connect} from 'react-redux';
import {createForm} from '../../actions/formActions';
class Form extends React.Component{
    state={
        name:"",
        email:"",
        phone:"",
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        });
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.createForm(this.state)
    }
    render()
    {
        return(
                <div className="container">
                    <form onSubmit={this.handleSubmit} className="white">
                        <h5 className="grey-text text-darken-3">Create New Form</h5>
                        <div className="input-field">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" id="phone" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">Submit</button>
                        </div>
                    </form>
                </div>
        )
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        createForm:(form)=>dispatch(createForm(form))
    }
}
export default connect(null,mapDispatchToProps)(Form);