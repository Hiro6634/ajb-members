import React, { Component }  from 'react';
import { Route, Switch } from 'react-router'; 
import HomePage from './pages/homepage/homepage.component';
import PersonalInfoPage from './pages/personalinfo/personalinfo.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';


class App extends Component {

  unsubscribeFromAuth = null;


  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} /> 
          <Route path='/personal-info' component={PersonalInfoPage} /> 
          <Route path='/signin' component={SignInAndSignUpPage} /> 
        </Switch>
      </div>
    );
  } 
}

export default App;
