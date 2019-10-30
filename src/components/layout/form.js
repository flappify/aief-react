import React from 'react';
import {connect} from 'react-redux';
import {createForm} from '../../actions/formActions';
import firebase from '../../config/firebase';
class Form extends React.Component{
    state={
        name:"",
        email:"",
        phone:"",
        curr_address:"",
        per_address:"",
        dob:"",
        gender:"",
        father_name:"",
        mother_name:"",
        qualification:"",
        profession:"",
        mem_dur:"",
        mem_fee:"",
        doc_type:"",
        doc_no:"",
        accept:"",
        same_per:false,
        image:"",
        image2:"",
        url:"",
        url2:"",
        previewurl:"",
        previewurl2:"",
        redirectToReferrer:false,
        redirectToReferrer2:false,
        tab:"tab",
        activetab:"tab-selected",
        tab1:"tab-selected",
        tab2:"tab",
        tab3:"tab",
        statusPart1:"flex",
        statusPart2:"none",
        statusPart3:"none",
        previous:"hidden",
        next:"visible",
        submit:"none",
        currTab:"1",
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
    handleImageChange2=(e)=>{
        if (e.target.files[0]) {
            const image2 = e.target.files[0];
            const imageSize2=image2.size/1024;
            let reader = new FileReader();
            console.log(image2);
            if(image2.type ==="image/jpeg" && imageSize2 <"300")
            {
                reader.onloadend = () => {
                    this.setState({
                      image2: image2,
                      previewurl2: reader.result
                    });
                  }
                  reader.readAsDataURL(image2)
            }
            else{
                this.setState(() => ({image2:null}));
            }
          }
    }
    handleShow1=(e)=>{
        e.preventDefault();
        this.setState(() => ({
            tab1:"tab-selected",
            tab2:"tab",
            tab3:"tab",
            statusPart1:"flex",
            statusPart2:"none",
            statusPart3:"none",
            previous:"hidden",
            next:"block",
            currTab:"1",
            submit:"none"
        }));
    }
    handleShow2=(e)=>{
        e.preventDefault();
        this.setState(() => ({
            tab2:"tab-selected",
            tab1:"tab",
            tab3:"tab",
            statusPart2:"flex",
            statusPart1:"none",
            statusPart3:"none",
            previous:"visible",
            next:"block",
            currTab:"2",
            submit:"none"
        }));
    }
    handleShow3=(e)=>{
        e.preventDefault();
        this.setState(() => ({
            tab3:"tab-selected",
            tab2:"tab",
            tab1:"tab",
            statusPart3:"flex",
            statusPart2:"none",
            statusPart1:"none",
            previous:"visible",
            next:"none",
            currTab:"3",
            submit:"block"
        }));
    }
    handlePrevious=(e)=>{
        e.preventDefault();
        if(this.state.currTab==="2")
        {
            this.setState(() => ({
                tab1:"tab-selected",
                tab2:"tab",
                tab3:"tab",
                statusPart1:"flex",
                statusPart2:"none",
                statusPart3:"none",
                currTab:"1",
                previous:"hidden",
                next:"block",
                submit:"none"
            }));
        }
        else if(this.state.currTab==="3")
        {
            this.setState(() => ({
                tab2:"tab-selected",
                tab1:"tab",
                tab3:"tab",
                statusPart2:"flex",
                statusPart1:"none",
                statusPart3:"none",
                currTab:"2",
                previous:"visible",
                next:"block",
                submit:"none"
            }));
        }
    }
    handleNext=(e)=>{
        e.preventDefault();
        if(this.state.currTab==="1")
        {
            this.setState(() => ({
                tab2:"tab-selected",
                tab1:"tab",
                tab3:"tab",
                statusPart2:"flex",
                statusPart1:"none",
                statusPart3:"none",
                currTab:"2",
                previous:"visible",
                next:"block",
                submit:"hidden"
            }));
        }
        else if(this.state.currTab==="2")
        {
            this.setState(() => ({
                tab3:"tab-selected",
                tab1:"tab",
                tab2:"tab",
                statusPart3:"flex",
                statusPart1:"none",
                statusPart2:"none",
                currTab:"3",
                previous:"visible",
                next:"none",
                submit:"block"
            }));
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
        const image = this.state.image;
        const image2 = this.state.image2;
        const fileName=this.state.name+this.state.phone;
        const fileName2=this.state.name+this.state.phone+this.state.doc_type;
        firebase.storage().ref(`images/${fileName}`).put(image)
        firebase.storage().ref(`images/${fileName2}`).put(image2)
        firebase.storage().ref('images').child(fileName).getDownloadURL().then(url => {
            console.log(url);
            this.setState(()=>({
                url:url,
                image:fileName,
                redirectToReferrer: true
            }))
        })
        firebase.storage().ref('images').child(fileName2).getDownloadURL().then(url2 => {
            console.log(url2);
            this.setState(()=>({
                url2:url2,
                image2:fileName2,
                redirectToReferrer2: true
            }))
            this.props.createForm(this.state)
        })
        document.querySelector('.alert').style.display="flex";
        setTimeout(function(){ document.querySelector('.alert').style.display="none"; }, 6000);
        console.log(this.state);
    }
    
    render()
    {
        const {applyError}=this.props;
        const part_1={
            display:this.state.statusPart1
        }
        const part_2={
            display:this.state.statusPart2
        }
        const part_3={
            display:this.state.statusPart3
        }
        const prev={
            visibility:this.state.previous
        }
        const nex={
            display:this.state.next
        }
        const sub={
            display:this.state.submit
        }
        return(
                <div className="apply-container">
                    <h4>You are few steps Away from becoming an AIEF Member</h4>
                    <h5>Fill your details below:-</h5>
                    <div className="form-container">
                        <div className="tabs">
                                <div className={this.state.tab1} onClick={this.handleShow1}>
                                    <h1>Profile Info</h1>
                                </div>
                                <div className={this.state.tab2} onClick={this.handleShow2}>
                                    <h1>Personal Info</h1>
                                </div>
                                <div className={this.state.tab3} onClick={this.handleShow3}>
                                    <h1>Terms & Cond.</h1>
                                </div>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                        <div className="form-part-1" style={part_1}>
                        <div className="form-profile-choose">
                            <div className="form-profile-picture">
                            <img src={this.state.previewurl || 'https://demos.creative-tim.com/material-bootstrap-wizard/assets/img/default-avatar.png'} alt="Uploaded images"/>
                            <input type="file" id="profile-photo" onChange={this.handleImageChange} required/>
                            </div>
                            <label htmlFor="profile-photo">CHOOSE PHOTO</label>
                        </div>
                        <div className="form-profile-details">
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
                        </div>
                        </div>
                       <div className="form-part-2" style={part_2} >
                       <div className="form-group">
                       <div className="input-field">
                            <label htmlFor="curr-address">Current Address</label>
                            <input type="text" id="curr_address" onChange={this.handleChange} required/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="per-address">Permanent Address</label>
                            <input type="text" id="per_address" onChange={this.handleChange} required/>
                        </div>
                       </div>
                        <div className="form-group">
                        <div className="input-field">
                            <label htmlFor="father_name">Father's Name</label>
                            <input type="text" id="father_name" onChange={this.handleChange} required/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="mother_name">Mother's Name</label>
                            <input type="text" id="mother_name" onChange={this.handleChange} required/>
                        </div>
                        </div>
                        <div className="form-group">
                        <div className="input-field">
                            <label htmlFor="qualification">Qualification</label>
                            <input type="text" id="qualification" onChange={this.handleChange} required/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="profession">Profession</label>
                            <input type="text" id="profession" onChange={this.handleChange} required/>
                        </div>
                        </div>
                        <div className="form-group">
                        <div className="input-field">
                            <label htmlFor="mem_dur">Membership Duration</label>
                            <input type="text" id="mem_dur" onChange={this.handleChange} required/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="mem_fee">Membership Fees</label>
                            <input type="text" id="mem_fee" onChange={this.handleChange} required/>
                        </div>
                        </div>
                        <div className="input-field">
                            <label htmlFor="ref">Reference</label>
                            <input type="text" id="ref" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                        <div className="input-field">
                            <label htmlFor="ref">Document Type</label>
                            <select id="doc_type" onChange={this.handleChange}>
                                <option value="voter">Voter ID</option>
                                <option value="aadhar">Aadhar</option>
                                <option value="driving">Driving Licence</option>
                                <option value="passport">Passport No.</option>
                                <option value="student">Student ID</option>
                            </select>
                        </div>
                        <div className="input-field">
                            <label htmlFor="doc_no">Document No.</label>
                            <input type="text" id="doc_no" onChange={this.handleChange}/>
                        </div>
                        </div>
                        <div className="document">
                            <div className="document-picker">
                            <img src={this.state.previewurl2 || 'https://cdn.website.thryv.com/5d1fe685b4a64589bc36d37fca3e09c2/dms3rep/multi/mobile/passport.png'} alt="Uploaded images"/>
                            <input type="file" id="document-photo" onChange={this.handleImageChange2} required/>
                            </div>
                            <label htmlFor="document-photo">CHOOSE DOCUMENT</label>
                        </div>
                        </div>
                        <div className="form-part-3" style={part_3}>
                            <h4>Terms & Conditions</h4>
                            <p>For all AIEF, National/State/Patrons holder the new membership of above mentioned organization one has membership fees and donation as per own capacity and requirements of the organization for spread and promotion of the AIEF.</p>
                            <p>All AIEF executive member, the new membership charges &#x20b9; 200 only.</p>
                            <p>All AIEF post holders members, the new membership charges &#x20b9; 1500 only.</p>
                            <p>If any member of the office bearer of our organization is found guilty of being involved in illegal activities, cheating, duping or misuse of his ID card including the name of the organization, our AIEF will take no reponsibility for that, the administration is free to take legal action against him/her. </p>
                            <div className="accept-group">
                                <input className="checkbox" type="checkbox" id="checkbox" />
                                <label htmlFor="checkbox">I accept the terms and conditions</label>
                            </div>
                        </div>
                        <div className="buttons">
                            <button onClick={this.handlePrevious} style={prev}>PREVIOUS</button>
                            <button onClick={this.handleNext} style={nex}>NEXT</button>
                            <button type="submit" style={sub}>SUBMIT</button>
                        </div>
                    </form>
                    
                    </div>
                    <div className="alert">
                        {applyError ? <p>{applyError}</p>:null}
                    </div>
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