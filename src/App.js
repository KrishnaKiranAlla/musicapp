import React, { Component } from 'react';
import './App.css';
import Container from './Container.js';
import Login from './Login.js';
import Register from './Register.js';
import About from './About.js';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
const Home=()=>{
  return(
    <div>
      <Container/>
      <About/>
        </div>
  )
};
const About1=()=>{
  return (
      <div>
       <Container/>
       <About/>
      </div>
  )
};
const Login1=()=>{
  return (
      <div>
      <Container/>
       <Login/>
      </div>
  )
};
const Register1=()=>{
  return (
      <div>
      <Container/>
       <Register/>
      </div>
  )
};
      class App extends Component {
        render() {
          return (
            <Router>
               <div>
                 <Route exact path="/" component={Home}/>
                 <Route exact path="/about" component={About1}/>
                 <Route exact path="/login2" component={Login1}/>
                 <Route exact path="/register2" component={Register1}/>
               </div>
             </Router>
      
    );
  }
}

export default App;
