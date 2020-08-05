import React, { Component } from 'react'
import '../style/contactsPanel.css'
import ChatCard from './ChatCard'
import AddAFriend from './AddAFriend'
import Navbar from './Navbar'
import axios from 'axios';
// import { useAuth } from "../context/auth";
// import { AuthContext } from "../context/auth";

export class ContactsPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            

        }
    }
    getUsers =(user)=>{
        console.log(user)
        console.log(this.props.user.listOfChatRoom)
        var prop = this.props.user.listOfChatRoom;
        const rooms = prop.listOfChatRoom;
        var render = [];
        console.log(rooms)
       for (let index = 0; index < rooms.length; index++) {
           var tempRoom = {};
           axios({
            method: 'post',
            url: 'http://localhost:5000/api/chatRoom/show',
        }).then(res => {
                if (res.status === 200) {
                    tempRoom=res;
                    console.log(tempRoom)
                } 
        })
           render[index] = <ChatCard avatar={""} name={tempRoom.name}></ChatCard>;
           
       }
       return render;
    }
    render() {
       
        return (
            // <AuthContext.Consumer>
            // {authTokens => (
    
            <div className="contacts-main">
                <ul className="list">
                    {/* Add Each Contact As Items here as List Item using Iteration*/}
                    <AddAFriend />
                    
                    <ChatCard avatar={""} name={this.props.user.listOfChatRoom}></ChatCard>
                    {console.log(this.props.user)}


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

export default ContactsPanel
