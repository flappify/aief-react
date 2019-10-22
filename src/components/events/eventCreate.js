import React from 'react';
import {connect} from 'react-redux';
import AdminNav from '../dashboard/adminNav';
import {createEvent} from '../../actions/eventActions';
import firebase from '../../config/firebase';
import './event.css';

class CreateEvent extends React.Component{
    state={
        image:"",
        eventName:"Lorel Ipsum Dummy Text",
        eventshDesc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
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
            document.getElementById("createEvent").reset();
        this.setState(()=>({
            previewurl:null
        }))
        })
        )
    }

    render()
    {
        const {eventError}=this.props;
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
                                <div className="input-file">
                                    <input type="file" name="file" id="file" class="inputfile" onChange={this.handleImageChange} required/>
                                    <label for="file">Choose an Image</label>
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
                                    <textarea id="eventDesc" onChange={this.handleChange} required/>
                                </div>
                                <div className="input-field">
                                    <label htmlFor="eventDate">Event Date</label>
                                    <input type="text" id="eventDate" onChange={this.handleChange} required/>
                                </div>
                                <div className="submit">
                                    <button type="submit">Create Event</button>
                                </div>
                            </form>
                        </div>
                        <div className="right">
                            <div className="card">
                                <div className="card-image">
                                    <img src={this.state.previewurl || 'https://firebasestorage.googleapis.com/v0/b/aief-d.appspot.com/o/events%2FThe%20super%20powers%20of%20meditation2019-10-18?alt=media&token=56b01486-b73a-45e7-aad1-6c6efb428976'} alt="Uploaded images"/>
                                </div>
                                <div className="card-details">
                                    <h1>{this.state.eventName}</h1>
                                    <p>{this.state.eventshDesc}</p>
                                    <h2>Date: {this.state.eventDate}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="alert">{eventError ? <p>{eventError}</p>:null}</div>
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