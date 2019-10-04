import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './components/layout/home';
import SignIn from './components/auth/SignIn';
import Dashboard from './components/dashboard/dashboard';
import FormDetails from './components/form/formDetails';
import firebase from './config/firebase';
import './App.css';
class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/urna" component={SignIn} />
        <Route exact path="/urna/dashboard" component={Dashboard} />
        <Route path="/urna/dashboard/form/:id" component={FormDetails} />
      </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
