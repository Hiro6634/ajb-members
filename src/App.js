import React from 'react';
import {Route, Switch, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import SignInPage from './pages/sign-in-page/sign-in-page.component';
import PersonalInfoPage from './pages/personal-info/personal-info.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { selectCurrentUser } from './redux/user/user.selectors';
import { setCurrentUser } from './redux/user/user.actions';


class App extends React.Component {
  unsubscribeFromAuth = null;
  
  componentDidMount(){
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot( snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
    
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    const {currentUser} = this.props;
    return (
      <div>
        <Header/>
        <Switch>
          <Route  exact path='/' component={ HomePage  } />        
          <Route  path='/info' component={PersonalInfoPage}/>
          <Route 
            exact 
            path='/signin'  
            render={() => 
                currentUser ? (
                  <Redirect to='/info'/>
                ) : (
                  <SignInPage/>
                )
            }
          />
          <Redirect to ="/"/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

/*const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => (console.log("dispatch user:", user))
});
*/
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
