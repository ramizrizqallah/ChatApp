import React, { Component } from 'react'
import '../style/contactsPanel.css'
import ChatCard from './ChatCard'

export class ContactsPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {


        }
    }


    render() {
        return (
            <div className="contacts-main">

                <ul className="list">
                    {/* Add Each Contact As Items here as List Item using Iteration*/}
                    <ChatCard avatar={require('../assets/avatar.png')} name={"Ramiz Rizqallah"} text={"Hello World"}  />
                    <ChatCard avatar={require('../assets/avatar.png')} name={"Khader Ballout"} text={"Welcome to my tutorial"}  />
                    <ChatCard avatar={require('../assets/avatar.png')} name={"Abed"} text={"Quality Assurance is the best"}  />
                </ul>


                <div className="buttons">
                    <button id="chats" />
                    <button id="people" />
                </div>
            </div>
        )
    }
}

export default ContactsPanel
