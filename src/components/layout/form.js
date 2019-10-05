import React from 'react';
import {connect} from 'react-redux';
import {createForm} from '../../actions/formActions';
import firebase from '../../config/firebase';
import {Redirect} from 'react-router-dom';
class Form extends React.Component{
    state={
        name:"",
        email:"",
        phone:"",
        image:"",
        url:"",
        redirectToReferrer:false,
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        });
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const image = this.state.image;
        const fileName=this.state.name+this.state.phone;
        firebase.storage().ref(`images/${fileName}`).put(image).then(()=>{
            this.setState(()=>({
                image:fileName
            }))
            this.props.createForm(this.state)
            this.setState(()=>({
                redirectToReferrer: true
            }))
        })
        
    }
    handleImageChange=(e)=>{
        if (e.target.files[0]) {
            const image = e.target.files[0];
            let reader = new FileReader();
            console.log(image);
            if(image.type ==="image/jpeg" && image.size <"30000")
            {
                reader.onloadend = () => {
                    this.setState({
                      image: image,
                      url: reader.result
                    });
                  }
                  reader.readAsDataURL(image)
            }
            else{
                this.setState(() => ({image:null}));
            }
          }
    }
    render()
    {
        if (this.state.redirectToReferrer === true) {
           return <Redirect to="/" />
        }
        return(
                <div className="container">
                    <form onSubmit={this.handleSubmit} className="white">
                        <h5 className="grey-text text-darken-3">New Form</h5>
                        <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400"/>
                        <input type="file" onChange={this.handleImageChange}/>
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
                            <button >Submit</button>
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