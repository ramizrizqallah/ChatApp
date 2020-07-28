import React, { Component } from 'react';
import '../style/common.css';
import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import { useAuth } from "../context/auth";


function Login(props) {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();
    // const referer = props.location.state.referer || '/';

    function postLogin() {
        axios.post("https://www.somePlace.com/auth/login", {
            userName,
            password
        }).then(result => {
            if (result.status === 200) {
                setAuthTokens(result.data);
                setLoggedIn(true);
            } else {
                setIsError(true);
            }
        }).catch(e => {
            setIsError(true);
        });
    }
    if (isLoggedIn) {
        return <Redirect to={{ pathname: "/login" }} />;
    }

    return (
        <div className="card">
            <div className="cardHeader">WELCOME</div>
            <div className="inputGroup">

                <input
                    type="email"
                    value={userName}
                    onChange={e => {
                        setUserName(e.target.value);
                    }}
                    placeholder="Email"
                />
                <input
                    type="password"
                    value={password}
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                    placeholder="password"
                />
                <button onClick={postLogin}>Sign In</button>
            </div>
        </div>
    )
}


export default Login;
