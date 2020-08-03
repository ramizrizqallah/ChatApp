import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './Components/LandingPage.js';
import RegisterForm from './Components/RegisterForm';
import './style/common.css';
//import LogIn from './Components/LogIn';
//import Routing from './Routing';
import Profile from './Components/profile';
//import Profile from './Components/otherProfile';

import Routing from './Routing';
import MainPage from './Components/MainPage'

ReactDOM.render(
  <React.StrictMode>
    {/* <Routing /> */}
    {/* <Profile/> */}
    {/* <Routing /> */}
    <MainPage/>
  </React.StrictMode>,
  document.getElementById('root')
);