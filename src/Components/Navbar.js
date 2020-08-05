import React from 'react'
import '../style/mainPage.css'
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { useHistory } from "react-router-dom";
import axios from 'axios';
=======
import axios from 'axios';
import { useState } from "react";
>>>>>>> 4e7623645428c58b7cee2dcf4c5efbd5a0736920



export default function Navbar(props) {
<<<<<<< HEAD
 
=======
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
>>>>>>> 4e7623645428c58b7cee2dcf4c5efbd5a0736920

    return (
        <div className="navbar">

            <img id="navAvatar" style={avatarStyle} src={props.avatar} alt="Avatar" onClick={() => window.open("./login", "_blank")} />
            <div className="search-container">
<<<<<<< HEAD
                <input type="search" results="5" autosave="some_unique_value" placeholder="Search"  ></input>
                <button id="searchBtn" type="submit" ><i className="fa fa-search"></i></button>
=======
                <input id="searchForContacts" type="search" results="5" autosave="some_unique_value" placeholder="Search"
                    onChange={e => {
                        setName(e.target.value);
                    }} ></input>
                <button id="searchBtn" type="submit" onClick={searchName}><i className="fa fa-search"></i></button>
>>>>>>> 4e7623645428c58b7cee2dcf4c5efbd5a0736920
            </div>
        </div >


    )
}
const avatarStyle = {
    width: '50px'
}