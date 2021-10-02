import React, { Component }  from 'react';
import { Redirect, Route, Switch } from 'react-router'; 
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';


import HomePage from './pages/homepage/homepage.component';
import PersonalInfoPage from './pages/personalinfo/personalinfo.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import {auth, createMemberProfileDocument} from './firebase/firebase.utils';
import {setCurrentMember} from './redux/member/member.actions';
import {selectCurrentMember } from './redux/member/member.selectors';

import './App.css';

class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentMember} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async memberAuth =>{
      if(memberAuth ){
        const memberRef = await createMemberProfileDocument(memberAuth);

        memberRef.onSnapshot( snapshot => {
          setCurrentMember({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }
      setCurrentMember(memberAuth);
    });  
  } 

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  } 

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} /> 
          <Route path='/personal-info' component={PersonalInfoPage} /> 
          <Route path='/signin' 
            render={() => this.props.currentMember
            ? (<Redirect to='/'/>)
            : (<SignInAndSignUpPage/>)}/> 
        </Switch>
      </div>
    );
  } 
}

const mapStateToProps = createStructuredSelector({
  currentMember: selectCurrentMember
});

const mapDispatchToProps = dispatch => ({
  setCurrentMember: member => dispatch( setCurrentMember(member))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
