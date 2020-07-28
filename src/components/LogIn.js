import React, { Component } from 'react';
import '../style/common.css';
import { Link } from 'react-router-dom';

export class LogIn extends Component {

    render() {
        return (
            <form>
            <div className="card">
                <div className="cardHeader">WELCOME</div>
                <div className="inputGroup">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="sophie@example.com"
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*()]).{8,}'
                    />
                </div>
                <button type="submit" value="Submit">Sign In</button>
            
            </div>
            
            </form>
            
        )
    }
}

export default LogIn
