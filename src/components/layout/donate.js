import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import {connect} from 'react-redux';
import {createDonate} from '../../actions/donationActions';
import "./layout.css";

class Donate extends React.Component {
    state={
        amount:0,
        name:"",
        email:"",
        phone:"",
        address:"",
        purpose:"",
        proceed:"block",
        paypal:"none",
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        });
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState(()=>({
            proceed:"none",
            paypal:"block"
        }))
        
    }
    handleDatabase=()=>{
        console.log("For Database");
        this.props.createDonate(this.state)
    }
    render() {
        const {donateError}=this.props;
        const amount=parseInt(this.state.amount, 10);
        const onSuccess = (payment) => {
            // Congratulation, it came here means everything's fine!
                    console.log("The payment was succeeded!", payment);
                    this.handleDatabase();
            		// You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
        }
        const onCancel = (data) => {
            // User pressed "cancel" or close Paypal's popup!
            console.log('The payment was cancelled!', data);
            // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
        }
 
        const onError = (err) => {
            // The main Paypal's script cannot be loaded or somethings block the loading of that script!
            console.log("Error!", err);
            // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
            // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
        }
        let env = 'sandbox'; // you can set here to 'production' for production
        let currency = 'INR'; // or you can set this value from your props or state
        let total = amount; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
        // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/
 
        const client = {
            sandbox:'Ac-IsJnUj4a2f-reCxrYyuZgxxu0RB1IqAgQt-jjYoRzcYMV3SLWC85gf8ekhfJaYmIGD6ghiHRIQogd',
            production: 'AaK6PSCmjFHprihIkeblnScs6KHN30mrd56BScD0jRvFHcyZrAfcdaytDDTDMYh7oN2HExaPjmioGCRt',
        }
        // In order to get production's app-ID, you will have to send your app to Paypal for approval first
        // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
        //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
        // For production app-ID:
        //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/
 
        // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
        const proceed = {
            display: this.state.proceed,
          };
          const paypal = {
            display: this.state.paypal,
          };
        return (
            <div>
                <div>
                <form onSubmit={this.handleSubmit}>
                <div className="input-field">
                        <label htmlFor="amount">amount</label>
                        <input type="number" id="amount" onChange={this.handleChange} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" onChange={this.handleChange} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="phone">Phone</label>
                        <input type="number" id="phone" onChange={this.handleChange} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" onChange={this.handleChange} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="purpose">Purpose</label>
                        <input type="text" id="purpose" onChange={this.handleChange} required/>
                    </div>
                    <div className="input-field" style={proceed}>
                        <button type="submit">Proceed</button>
                    </div>
                </form>
            </div>
           <div className="paypal-main">
                <div className="paypal"  style={paypal}>
                    <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel}/>
                </div>
           </div>
           <div className="red-text center">{donateError ? <p>{donateError}</p>:null}</div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        donateError:state.donate.donateError
    }
  }
const mapDispatchToProps = (dispatch)=>{
    return{
        createDonate:(donate)=>dispatch(createDonate(donate))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Donate);