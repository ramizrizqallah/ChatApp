import React from 'react'

export default function ChatCard(props) {
    return (
        <div className="chat-card" 
        style={{height:'80px',
        padding:'15px 0px', 
        }}>
            <li  style={cardStyle}>
                {/* use avatar,name,message,bio passed in the function to render below */}


                {/* Below is for the user's avatar image to be displayed in chats or people's tab */}
                <div>
                    <img style={avatarStyle} src={props.avatar} alt="Avatar" />
                </div>

                {/* Below is for the user's Name whether in Chats tab or people */}
                <div>
                    <h4 style={nameStyle}>{props.name}</h4>
                    {/* Below is for the text in Chats or peoples' Tab */}
                    
                    <p style={textStyle}>{props.text}</p>
                    <p style={textStyle}>{props.bio}</p>
                
                </div>
                    {}
                <div style={{color:'white'}}>
                   {props.receivedAt}

                </div>
            </li>
        </div>
    )
}

const cardStyle = {
    marginLeft:'10px',
    display: 'grid',
    gridTemplateColumns: '20% 70% 10%',

}


const avatarStyle = {
    width: '50px'
}
const nameStyle = {
    fontFamily: '"Lucida Console", Courier, monospace',
    margin: '5px 10px',
    color: 'white'
}
const textStyle = {
    fontFamily: '"Lucida Console", Courier, monospace',
    fontSize:'12px',
    margin: '5px 10px',
    color: 'lightgrey'
}


