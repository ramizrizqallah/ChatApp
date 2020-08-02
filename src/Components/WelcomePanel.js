import React, { Component } from 'react';


class WelcomePanel extends Component {
    render() {
        return (
            <div className='main' >
                {/* <ul className='container'style={containerStyle} > */}
                {/* <li> */}
                     <div className='imgContainer'> <img style={avatarStyle} src={require('../assets/avatar.png')} alt="Avatar" /></div>
                     {/* </li> */}
                {/* <li>  */}
                    <div> <button style={{ width: '120px' }}> button</button></div>
                    {/* </li> */}
               
                 {/* </ul> */}
                  {/* <li> */}
                      <div> <button style={{ width: '120px' }}> button two</button></div>
                      {/* </li> */}
            </div>
        );
    }
}

const avatarStyle = {
    verticalAlign: 'middle',
    width: '150px',
    height: '150px',
    borderRadius: '50%'
}

//    const containerStyle = {
//         // marginLeft: '200px',
//         display: 'inline-block',
//         // float: 'left',
//         listStyleType: 'square',
//         width: '400px'
//     }
    //     .imgContainer = {
    //     width: '150px',
    //     height: '150px'
    // }
    // .main = {
    //     display: 'inline'
    // }
   



export default WelcomePanel;
