import React, { Component } from 'react';


class WelcomePanel extends Component {
    render() {
        return (
            <div className='container' style={containerStyle}>

                <div className='main' style={mainStyle} >

                    <div className='imgContainer'> <img style={avatarStyle} src={require('../assets/avatar.png')} alt="Avatar" /></div>
                    <div className='textBoxContainer' style={textBoxContainerStyle} ><input style={textBoxStyle} type='text' placeholder='name' /></div>
                    <div className='buttonContainer' style={btnContainerStyle}> <button style={buttonStyle}> Edit</button></div>

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
    marginLeft: '60px',
}
const mainStyle = {
    display: 'grid',
    gridTemplateColumns: '25% 35% 40%',
    marginTop: '60px',
    marginLeft: '60px',
    // gridArea : '1'
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
    width: '350px',
    marginTop: '130px',
    paddingLeft: '50px'

}
const buttonStyle = {
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
    marginTop: '160px',
}
const containerStyle = {
    display: 'inline'
}
const welcomeStyle = {
    marginLeft: '220px',
    color: 'white',
    marginTop: '30px'

}
const headerStyle = {
    fontSize: '35px',
    opacity: '90%'

}




export default WelcomePanel;
