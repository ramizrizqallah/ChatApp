import React, { Component } from 'react'
import '../style/mainPage.css'
import ContactsPanel from './ContactsPanel'
import NewChatRoom from './NewChatRoom'
import Navbar from './Navbar'
// import { useAuth } from "../context/auth";

export class MainPage extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    // getUser = () =>{
    //     axios({
    //         method: 'get',
    //         url: 'http://localhost:5000/api/auth/me',
    //     }).then(res => {

    //     }).catch(error => {
    //         console.log(error)
    //     })
    // }
    render() {
        return (

            <div className="container">
                <div className="left-panel">

                    {/* Add navBar Below this line ONLY and put its className ="navbar" */}
                    <Navbar avatar={require('../assets/avatar.png')} />

                    {/*  add two buttons for New Message and New Group */}
                    <NewChatRoom />


                    {/* Add Contacts Panel Below this line ONLY */}
                    <ContactsPanel />


                </div>
                <div className="right-panel">
                    {/* Add Welcome Panel Below this line ONLY */}


                </div>

            </div>

        )
    }
}

export default MainPage
