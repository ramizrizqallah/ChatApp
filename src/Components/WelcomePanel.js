import React, { Component } from 'react';
import axios from 'axios';
import { Link} from "react-router-dom";
class WelcomePanel extends Component {
  
  
    render() {
        return (
            <div className='container2' style={containerStyle}>
                <div className='main' style={mainStyle} >

                    <div className='imgContainer'> <img style={avatarStyle} src={require('../assets/avatar.png')} alt="Avatar" /></div>
                    <div className='textBoxContainer' style={textBoxContainerStyle} > {this.props.user.fullName}
                        {/* <input style={textBoxStyle} type='text' placeholder='name' /> */}
                        </div>
                    {/* <div className='buttonContainer' style={btnContainerStyle}> <Link to="/profile"><button  style={buttonStyle} onClick={this.handleClick}> Edit</button></Link></div> */}

                </div>
                <div className='welcome' style={welcomeStyle}>
                    <h1 style={headerStyle}>Welcome to ROOT chat app !</h1>
                </div>
            </div>
        );
    }
}

const avatarStyle = {
    verticalAlign: 'middle',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
}
const mainStyle = {
    gridArea:'2',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    height: '300px'
}

const textBoxStyle = {
    width: '300px',
    overflow: 'hidden',
    fontSize: '30px',
    border: 'none',
    outline: 'none',
    background: 'none',
    float: 'left',
    padding: '0 0',
    borderRadius: '0',
    borderBottom: '2px solid #007EF4',
    color: 'white'
}
const textBoxContainerStyle = {
    fontFamily:'"Lucida Console", Courier, monospace',
    fontSize:'40px',
    color:'white',
    position:'relative',
    height:'40px',
    top:'155px'
}

const buttonStyle = {
    cursor:'pointer',
    float: 'left',
    width: '50px',
    border: 'none',
    outline: 'none',
    background: 'none',
    color: 'white',
    opacity: '50%'


}
const btnContainerStyle = {
    paddingLeft: '0',
    position:'relative',
    top: '160px',
}
const containerStyle = {
    textAlign:'center',
    justifyContent:'center',
    display: 'inline'
}
const welcomeStyle = {
    color: 'white',
}
const headerStyle = {
    fontSize: '35px',
    opacity: '90%'

}




export default WelcomePanel;
