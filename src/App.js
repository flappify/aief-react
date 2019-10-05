import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './components/layout/home';
import SignIn from './components/auth/SignIn';
import Dashboard from './components/dashboard/dashboard';
import FormDetails from './components/form/formDetails';
import DonationDetails from './components/donation/donationDetails';
import HelpDetails from './components/helpdesk/helpdeskDetails';
import Apply from './components/layout/apply';
import './App.css';
class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/apply" component={Apply} />
        <Route exact path="/urna" component={SignIn} />
        <Route exact path="/urna/dashboard" component={Dashboard} />
        <Route path="/urna/dashboard/form/:id" component={FormDetails} />
        <Route path="/urna/dashboard/donation/:id" component={DonationDetails} />
        <Route path="/urna/dashboard/helpdesk/:id" component={HelpDetails} />
      </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
