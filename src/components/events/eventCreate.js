import React from 'react';
import {connect} from 'react-redux';
import AdminNav from '../dashboard/adminNav';
import {createEvent} from '../../actions/eventActions';
import firebase from '../../config/firebase';
import './event.css';

class CreateEvent extends React.Component{
    state={
        image:"",
        eventName:"Event Name",
        eventshDesc:"Event Short Description",
        eventDesc:"",
        eventDate:"2019-17-10",
        previewurl:"",
        url:"",
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
            if(image.type ==="image/jpeg" && imageSize <"1000")
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

    handleSubmit=(e)=>{
        e.preventDefault();
        const image = this.state.image;
        const fileName=this.state.eventName+this.state.eventDate;
        console.log(fileName);
        this.setState(()=>({
            image:fileName,
            redirectToReferrer:true
        }))
        firebase.storage().ref(`events/${fileName}`).put(image).then(()=>
        firebase.storage().ref('events').child(fileName).getDownloadURL().then(url => {
            this.setState(()=>({
                url:url
            }))
            this.props.createEvent(this.state) 
        console.log(this.state);
        document.getElementById("createEvent").reset();
        this.setState(()=>({
            previewurl:null
        }))
        })
        )
    }

    render()
    {
        return(
            <div>
                <AdminNav/>
                <div className="card-creation">
                    <div className="main">
                    <div className="top">
                        <h1>Create Event</h1>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <form onSubmit={this.handleSubmit} id="createEvent">
                                <div>
                                    
                                    <input type="file" onChange={this.handleImageChange} required/>
                                </div>
                                <div className="input-field">
                                    <label htmlFor="eventName">Event Name</label>
                                    <input type="text" id="eventName" onChange={this.handleChange} required/>
                                </div>
                                <div className="input-field">
                                    <label htmlFor="eventshDesc">Event Short Description</label>
                                    <input type="text" id="eventshDesc" onChange={this.handleChange} required/>
                                </div>
                                <div className="input-field">
                                    <label htmlFor="eventDesc">Event Description</label>
                                    <input type="text" id="eventDesc" onChange={this.handleChange} required/>
                                </div>
                                <div className="input-field">
                                    <label htmlFor="eventDate">Event Date</label>
                                    <input type="date" id="eventDate" onChange={this.handleChange} required/>
                                </div>
                                <div>
                                    <button>Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="right">
                            <div className="card">
                                <div className="card-image">
                                    <img src={this.state.previewurl || 'http://via.placeholder.com/400x300'} alt="Uploaded images"/>
                                </div>
                                <div className="card-details">
                                    <h1>{this.state.eventName}</h1>
                                    <p>{this.state.eventshDesc}</p>
                                    <h2>{this.state.eventDate}</h2>
                                </div>
                            </div>
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
        eventError:state.event.eventError
    }
  }
const mapDispatchToProps = (dispatch)=>{
    return{
        createEvent:(event)=>dispatch(createEvent(event))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CreateEvent);