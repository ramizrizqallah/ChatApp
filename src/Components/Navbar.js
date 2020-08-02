import React from 'react'
import '../style/mainPage.css'

export default function Navbar(props) {
    return (
        <div className="navbar">
            <img style={avatarStyle} src={props.avatar} alt="Avatar" />
            <div className="search-container">
                <input type="search" results="5" autosave="some_unique_value" placeholder="Search"  ></input>
                <button id="searchBtn" type="submit"><i className="fa fa-search"></i></button>
            </div>
        </div >


    )
}
const avatarStyle = {
    width: '50px'
}