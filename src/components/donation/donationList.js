import React from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import {firestoreConnect } from 'react-redux-firebase';
import {compose} from 'redux';
import {connect} from 'react-redux';
import DonationSummary from './donationSummary';
import '../form/form.css';
import donate from '../layout/donate';
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
                currSearch:"amount"
            }));
        }
        console.log(this.state);
    }
    render()
    {
        const {auth,donations}=this.props;
        if(!auth.uid) return <Redirect to='/urna' />
        return(
            <div className="form-list">
                <div className="search">
                    <div id="cover">
                        <div className="tb">
                        <div className="td">
                            <input type="text" id="search" placeholder="Search" onChange={this.handleChange} />
                        </div>
                        </div>
                    </div>
                    <div className="tags">
                        <div className={this.state.tab1} onClick={this.handleShow1}><h1>name</h1></div>
                        <div className={this.state.tab2} onClick={this.handleShow2}><h1>phone</h1></div>
                        <div className={this.state.tab3} onClick={this.handleShow3}><h1>amount</h1></div>
                    </div>
                </div>
                <div className="form-list-arrange">
                {donations && donations.map(donation=>{
                    var found="false";
                    var searchName=this.state.search.toUpperCase();
                    searchName=searchName.replace(/\s+/, "");
                    var type=this.state.currSearch;
                    if(type==="name")
                    {
                        var formName=donation.name.toUpperCase();
                    }
                    if(type==="phone")
                    {
                        var formName=donation.phone.toUpperCase();
                    }
                    if(type==="amount")
                    {
                        var formName=donation.amount.toUpperCase();
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
                            <div className="form-list-card" key={donate.id}>
                                <Link to={'/urna/dashboard/helpDesk/'+donate.id} key={donate.id} style={{ textDecoration: 'none' }}>
                                    <DonationSummary donation={donation} key={donate.id}/>
                                </Link>
                            </div>
                        )
                    }
                    if(this.state.search==="")
                    {
                        return(
                            <div className="form-list-card" key={donation.id}>
                                <Link to={'/urna/dashboard/helpDesk/'+donation.id} key={donation.id} style={{ textDecoration: 'none' }}>
                                    <DonationSummary donation={donation} key={donation.id}/>
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
      donations:state.firestore.ordered.donations,
    }
  }

  export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'donations',orderBy:['createdAt','desc']},
    ])
  )(FormList)