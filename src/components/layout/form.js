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
        curr_address:"",
        per_address:"",
        same_per:false,
        image:"",
        url:"",
        previewurl:"",
        redirectToReferrer:false,
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        });
    }
    handleImageChange=(e)=>{
        if (e.target.files[0]) {
            const image = e.target.files[0];
            const imageSize=image.size/1024;
            let reader = new FileReader();
            console.log(image);
            if(image.type ==="image/jpeg" && imageSize <"300")
            {
                reader.onloadend = () => {
                    this.setState({
                      image: image,
                      previewurl: reader.result
                    });
                  }
                  reader.readAsDataURL(image)
            }
            else{
                this.setState(() => ({image:null}));
            }
          }
    }
    handlePerAddress=(e)=>{
        if(this.state.same_per)
        {
            this.setState(() => ({
                same_per:false,
                per_address:this.state.per_address
            }));
        }
        else{
            this.setState(() => ({
                same_per:true,
                per_address:this.state.curr_address
            }));
        }
        console.log(this.state.same_per);
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const image = this.state.image;
        const fileName=this.state.name+this.state.phone;
        firebase.storage().ref(`images/${fileName}`).put(image)
        firebase.storage().ref('images').child(fileName).getDownloadURL().then(url => {
            console.log(url);
            this.setState(()=>({
                url:url,
                image:fileName,
                redirectToReferrer: true
            }))
            this.props.createForm(this.state)
        })
        console.log(this.state);
    }
    
    render()
    {
        const {applyError}=this.props;
        var per_value;
        var same_per=this.state.same_per;
        if(same_per)
        {
            per_value=this.state.curr_address;
        }
        return(
                <div className="container">
                    <form onSubmit={this.handleSubmit} className="white">
                        <h5 className="grey-text text-darken-3">New Form</h5>
                        <img src={this.state.previewurl || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400"/>
                        <input type="file" onChange={this.handleImageChange} required/>
                        <div className="input-field">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" onChange={this.handleChange} required/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={this.handleChange} required/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" id="phone" onChange={this.handleChange} required/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="curr-address">Current Address</label>
                            <input type="text" id="curr_address" onChange={this.handleChange} required/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="per-address">Permanent Address</label>
                            <input type="checkbox" id="same_per_address" onChange={this.handlePerAddress}/>Same as current address
                            <input type="text" id="per_address" value={per_value} onChange={this.handleChange} required/>
                        </div>
                        <div className="input-field">
                            <button >Submit</button>
                        </div>
                    </form>
                    <div className="red-text center">{applyError ? <p>{applyError}</p>:null}</div>
                </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        applyError:state.form.applyError
    }
  }
const mapDispatchToProps = (dispatch)=>{
    return{
        createForm:(form)=>dispatch(createForm(form))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Form);