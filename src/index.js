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
<<<<<<< HEAD
    {/* <Routing /> */}
    <Profile/>
=======
    <Routing />
    {/* <MainPage/> */}
>>>>>>> 42ffba22f877f1b881bc5f0fcf1bdf47b0311008
  </React.StrictMode>,
  document.getElementById('root')
);