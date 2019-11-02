import React from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import {firestoreConnect } from 'react-redux-firebase';
import {compose} from 'redux';
import {connect} from 'react-redux';
import FormSummary from './formSummary';
import './form.css';
class FormList extends React.Component{
    state={
        search:"",
        tab1:"tab-selected",
        tab2:"tab",
        tab3:"tab",
        currSearch:"name",
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        });
        console.log(this.state)
    }
    handleShow1=()=>{
        if(this.state.tab1==="tab")
        {
            this.setState(() => ({
                tab2:"tab",
                tab1:"tab-selected",
                tab3:"tab",
                currSearch:"name"
            }));
        }
        console.log(this.state);
    }
    handleShow2=()=>{
        if(this.state.tab2==="tab")
        {
            this.setState(() => ({
                tab1:"tab",
                tab2:"tab-selected",
                tab3:"tab",
                currSearch:"phone"
            }));
        }
        console.log(this.state);
    }
    handleShow3=()=>{
        if(this.state.tab3==="tab")
        {
            this.setState(() => ({
                tab2:"tab",
                tab3:"tab-selected",
                tab1:"tab",
                currSearch:"email"
            }));
        }
        console.log(this.state);
    }
    render()
    {
        const {auth,forms}=this.props;
        if(!auth.uid) return <Redirect to='/urna' />
        return(
            <div className="form-list">
                <div className="search">
                    <div id="cover">
                        <div class="tb">
                        <div class="td">
                            <input type="text" id="search" placeholder="Search" onChange={this.handleChange} />
                        </div>
                        </div>
                    </div>
                    <div className="tags">
                        <div className={this.state.tab1} onClick={this.handleShow1}><h1>name</h1></div>
                        <div className={this.state.tab2} onClick={this.handleShow2}><h1>phone</h1></div>
                        <div className={this.state.tab3} onClick={this.handleShow3}><h1>email</h1></div>
                    </div>
                </div>
                <div className="form-list-arrange">
                {forms && forms.map(form=>{
                    var found="false";
                    var searchName=this.state.search.toUpperCase();
                    searchName=searchName.replace(/\s+/, "");
                    var type=this.state.currSearch;
                    if(type==="name")
                    {
                        var formName=form.name.toUpperCase();
                    }
                    if(type==="phone")
                    {
                        var formName=form.phone.toUpperCase();
                    }
                    if(type==="email")
                    {
                        var formName=form.email.toUpperCase();
                    }
                    formName=formName.replace(/\s+/, "");
                    var formNameLength=formName.length;
                    for(var i=0;i<formNameLength;i++)
                    {
                        if (formName.indexOf(searchName) > -1) {
                           found=true;
                        } else {
                            found=false;
                        }
                    }
                    if(found)
                    {
                        console.log(searchName,formName,found);
                        return(
                            <div className="form-list-card" key={form.id}>
                                <Link to={'/urna/dashboard/application/'+form.id} key={form.id} style={{ textDecoration: 'none' }}>
                                    <FormSummary form={form} key={form.id}/>
                                </Link>
                            </div>
                        )
                    }
                    if(this.state.search==="")
                    {
                        return(
                            <div className="form-list-card" key={form.id}>
                            <Link to={'/urna/dashboard/application/'+form.id} key={form.id} style={{ textDecoration: 'none' }}>
                                <FormSummary form={form} key={form.id}/>
                            </Link>
                            </div>
                        )
                    }
                        
                })}
                </div>
            </div>
        )
    }
}


const mapStateToProps=(state)=>{
    return{
      auth:state.firebase.auth,
      forms:state.firestore.ordered.forms,
    }
  }
  
  export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'forms',orderBy:['createdAt','desc']},
    ])
  )(FormList)