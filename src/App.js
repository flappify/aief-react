import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './components/layout/home';
import SignIn from './components/auth/SignIn';
import Dashboard from './components/dashboard/dashboard';
import './App.css';
class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/urna" component={SignIn} />
        <Route path="/urna/dashboard" component={Dashboard} />
      </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
