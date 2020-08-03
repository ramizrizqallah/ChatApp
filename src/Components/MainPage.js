import React, { Component } from 'react'
import '../style/mainPage.css'
import ContactsPanel from './ContactsPanel'
import NewChatRoom from './NewChatRoom'
<<<<<<< HEAD
import WelcomePanel from './WelcomePanel';
=======
import Navbar from './Navbar'
>>>>>>> 5b3b89e788d75f8b7c0b1ba03674fe03d1d9790a


export class MainPage extends Component {
    constructor(props) {
        super(props)
        this.state = {


        }
    }
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
<<<<<<< HEAD
                    <WelcomePanel/>
                    
=======

>>>>>>> 5b3b89e788d75f8b7c0b1ba03674fe03d1d9790a

                </div>

            </div>
        )
    }
}

export default MainPage
