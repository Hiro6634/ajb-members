import React, { Component }  from 'react';
import { Route, Switch } from 'react-router'; 
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';


const CardPage = () => (
  <div>
    <h1>CARD PAGE</h1>
  </div>
);
class App extends Component {
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} /> 
          <Route path='/card' component={CardPage} /> 
        </Switch>
      </div>
    );
  } 
}

export default App;
