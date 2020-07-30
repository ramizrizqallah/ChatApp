import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './Components/LandingPage.js';
import RegisterForm from './Components/RegisterForm';
import './style/common.css';
import LogIn from './Components/LogIn';
import Routing from './Routing';
import Profile from './Components/profile';


ReactDOM.render(
  <React.StrictMode>
 
    { <Routing /> }
  </React.StrictMode>,
  document.getElementById('root')
);