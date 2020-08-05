import React from 'react'
import '../style/mainPage.css'
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from 'axios';



export default function Navbar(props) {
 

    return (
        <div className="navbar">

            <img id="navAvatar" style={avatarStyle} src={props.avatar} alt="Avatar" onClick={() => window.open("./login", "_blank")} />
            <div className="search-container">
                <input type="search" results="5" autosave="some_unique_value" placeholder="Search"  ></input>
                <button id="searchBtn" type="submit" ><i className="fa fa-search"></i></button>
            </div>
        </div >


    )
}
const avatarStyle = {
    width: '50px'
}