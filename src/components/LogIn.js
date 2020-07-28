import React, { Component } from 'react';
import '../style/common.css';

export class LogIn extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:''
        }
    }

    handleUsernameChange = e =>{
    this.setState({
        username:e.target.value
    })
    }
    handlePasswordChange = e =>{
        this.setState({
            password:e.target.value
        })
        }

    handleChange = e =>{
    alert(`${this.state.username}  ${this.state.password}`)
    e.preventDefault()
    }    

    render() {
        return (
            <form onSubmit={this.handleChange}>
            <div className="card">
                <div className="cardHeader">WELCOME</div>
                <div className="inputGroup">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="sophie@example.com"
                        value={this.state.username} 
                        onChange={this.handleUsernameChange}
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*()]).{8,}'
                        value={this.state.password} 
                        onChange={this.handlePasswordChange}
                    />
                </div>
                <button type="submit" value="Submit">Sign In</button>
            </div>
            </form>
        )
    }
}

export default LogIn
