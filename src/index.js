import React from 'react';
import ReactDOM from 'react-dom';
// import LandingPage from './Components/LandingPage.js';
import RegisterForm from './Components/RegisterForm';
import './style/common.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <LandingPage/> */}
    <RegisterForm />

  </React.StrictMode>,
  document.getElementById('root')
);