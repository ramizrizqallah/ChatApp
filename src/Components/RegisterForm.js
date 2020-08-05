import React, { Component } from 'react';
import '../style/common.css';
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import { useAuth } from "../context/auth";
import { useState } from "react";
function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pass, setPass] = useState("");
    const [passTwo, setPassTwo] = useState("");
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);
    const { setAuthTokens } = useAuth();
    const [isLoggedIn, setLoggedIn] = useState(false);
    function handleSubmit (event){
        if (pass != passTwo) {
            setMessage("Passwords Do Not Match")

        }
        else {
            let finalPass = pass
            setPassword(finalPass)
            setMessage("")

            event.preventDefault();
            //console.log("Matching passwords")
            // send a POST request

            axios({
                method: 'post',
                url: 'http://localhost:5000/api/user/store',
                data: {
                    fullName: name,
                    email: email,
                    password: password,

                }
            }).then(res => {
                if (res.status === 200) {
                    setAuthTokens(res.data.token);
                    setLoggedIn(true);
                } else {
                    setIsError(true);
                }
                if (res.data.doesExist) {
                    setMessage("Username Already Exists, Consider Logging In")
                }
            }).catch(error => {
                console.log(error)
            })
        }
    }
    if (isLoggedIn) {
        return <Redirect to={{ pathname: "/admin" }} />;
    }
    // const history = useHistory();
    return (
        <form>
            <div className="card">
                <div className="cardHeader">Create Account</div>
                <div className="inputGroup">
                    <input
                    className="logginginfo"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Full Name"
                        value={name}
                        onChange={e => {
                            setName(e.target.value);
                        }}

                    />
                    <input
                    className="logginginfo"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        title="Email must look similar to this example@example.com"
                        value={email}
                        onChange={e => {
                            setEmail(e.target.value);
                        }}
                    />
                    <input
                    className="logginginfo"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*()]).{8,}'
                        title="Password must contain Uppercase, Lowercase, Numbers, and Symbols"
                        value={pass}
                        onChange={e => {
                            setPass(e.target.value);
                        }}
                    />
                    <input
                    className="logginginfo"
                        type="password"
                        name="passwordConfirm"
                        id="passwordConfirm"
                        placeholder="Confirm Password"
                        pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*()]).{8,}'
                        title="Password must contain Uppercase, Lowercase, Numbers, and Symbols"
                        value={passTwo}
                        onChange={e => {
                            setPassTwo(e.target.value);
                        }}
                    />
                    <label
                        style={{
                            color: 'red',
                        }}
                    >{message}</label>

                </div>

                <button className="submittingButton" type="submit" value="Submit" onClick={handleSubmit}> Sign Up </button>
                <div>Already Have an Account?</div>
                <Link to="/login">Log in</Link>
            </div>
        </form>
    )
}
export default RegisterForm;