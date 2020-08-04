import React, { Component } from 'react'
import '../style/mainPage.css'
import ContactsPanel from './ContactsPanel'
import NewChatRoom from './NewChatRoom'
import WelcomePanel from './WelcomePanel';
import Navbar from './Navbar'
import { useAuth } from "../context/auth";
import { useState, useEffect } from "react";
import axios from 'axios';

function MainPage(){
    const { authTokens } = useAuth();
    const [userData, setUserData] = useState("");
    useEffect(() => {
        // Your code here
        axios({
            method: 'get',
            url: 'http://localhost:5000/api/auth/me',
            headers: {
                'x-access-token': authTokens
              }
        }).then(res => {
            setUserData(res.data);
        }).catch(e => {
        });
      }, []);
   
        return (
            <div className="main-container">
                <div className="left-panel">

                    {/* Add navBar Below this line ONLY and put its className ="navbar" */}
                    <Navbar avatar={require('../assets/avatar.png')} />

                    {/*  add two buttons for New Message and New Group */}
                    <NewChatRoom />


                    {/* Add Contacts Panel Below this line ONLY */}
                    <ContactsPanel />


                </div>
                <div className="right-panel">
                    <div></div>
                    {/* Add Welcome Panel Below this line ONLY */}
                    <WelcomePanel />
                    


                </div>

            </div>

        )
    }


export default MainPage
