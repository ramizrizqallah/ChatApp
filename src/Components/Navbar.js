import React from 'react'
import '../style/mainPage.css'
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";



export default function Navbar(props) {
    const [name, setName] = useState("");
    const [isError, setIsError] = useState(false);


    function searchName() {
        axios({
            method: 'post',
            url: 'http://localhost:5000/api/user/search',
            data: {
                fullName: name,
            }
        }).then(res => {
            console.log(res);

        }).catch(e => {
            setIsError(true);
        });
    }

    return (
        <div className="navbar">

            <img id="navAvatar" style={avatarStyle} src={props.avatar} alt="Avatar" onClick={() => window.open("./login", "_blank")} />
            <div className="search-container">
                <input type="search" results="5" autosave="some_unique_value" placeholder="Search"
                    onChange={e => {
                        setName(e.target.value);
                    }} ></input>
                <button id="searchBtn" type="submit" onClick={searchName}><i className="fa fa-search"></i></button>
            </div>
        </div >


    )
}
const avatarStyle = {
    width: '50px'
}