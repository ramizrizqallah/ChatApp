import React, { Component } from 'react'
import '../style/mainPage.css'
import ContactsPanel from './ContactsPanel'
import NewChatRoom from './NewChatRoom'
import WelcomePanel from './WelcomePanel';


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
                    

                    {/*  add two buttons for New Message and New Group */}
                     <NewChatRoom/>


                    {/* Add Contacts Panel Below this line ONLY */}
                    <ContactsPanel />


                </div>
                <div className="right-panel">
                    {/* Add Welcome Panel Below this line ONLY */}
                    <WelcomePanel/>
                    

                </div>

            </div>
        )
    }
}

export default MainPage
