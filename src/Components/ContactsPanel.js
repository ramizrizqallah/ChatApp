import React, { Component } from 'react'
import '../style/contactsPanel.css'
import ChatCard from './ChatCard'
import AddAFriend from './AddAFriend'
import Navbar from './Navbar'
import axios from 'axios';

export class ContactsPanel extends Component {

    constructor(props) {
        super(props)
        this.state = {


        }
    }
    getUsers = (arg) => {
        console.log(arg)
        var length = arg.listOfChatRoom.length
        var temp = [];
        for (let i = 0; i < length; i++) {
            axios({
                method: 'post',
                url: 'http://localhost:5000/api/chatRoom/show',
                data: {
                    chatRoomID: arg.listOfChatRoom[i]
                }
            }).then(res => {
                if (res.status === 200) {
                    temp.push({
                        name: res.data.response.name,
                        text: res.data.response.lastMessage,
                        receivedAt: res.data.response.receivedAt
                    });
                }

            })

        }
        console.log(temp)
        return temp;
    }
    render() {
        if (!this.props.user) {
            return <div>Loading...</div>
        }
        else {
            var array = this.getUsers(this.props.user);
            return (
                // <AuthContext.Consumer>
                // {authTokens => (

                <div className="contacts-main">
                    <ul className="list">
                        {/* Add Each Contact As Items here as List Item using Iteration*/}

                        {this.props.user.listOfChatRoom.length > 0 ? '':<AddAFriend />}
                        


                        {array.map((card) => {
                            console.log(card)
                            return <ChatCard name={card.name} text={card.test} receivedAt={card.receivedAt} />
                        })}


                    </ul>


                    <div className="buttons">
                        <button id="chats" />
                        <button id="people" />
                    </div>
                </div>
                //  )}
                //  </AuthContext.Consumer>
            )
        }
    }
}

export default ContactsPanel
