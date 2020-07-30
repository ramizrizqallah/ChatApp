import React, { Component } from 'react'
import '../style/contactsPanel.css'
export class ContactsPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {


        }
    }

    
    render() {
        return (
            <div className="contacts-main">

                <div className="list">Contacts List</div>

                <div className="buttons">
                    <button id="chats" />
                    <button id="people" />
                </div>
            </div>
        )
    }
}

export default ContactsPanel
