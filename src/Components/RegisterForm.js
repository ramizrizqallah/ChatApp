import React from "react";
import '../style/common.css';
const axios = require('axios')

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',

            pass: '',
            passTwo: '',
            message: '',
        }
    }
    onName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    onEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    firstPass = (e) => {
        this.setState({
            pass: e.target.value
        })
    }
    secondPass = (e) => {
        this.setState({
            passTwo: e.target.value
        })
    }
    handleSubmit = (event) => {


        if (this.state.pass != this.state.passTwo) {
            event.preventDefault();
            this.setState({
                message: "Passwords Do Not Match"
            })

        }
        else {
            let finalPass = this.state.pass
            this.setState({
                password: finalPass,
                message: "",
            })

            event.preventDefault();
            //console.log("Matching passwords")
            // send a POST request
            axios({
                method: 'post',
                url: 'http://localhost:5000/api/user/store',
                data: {
                    fullName: this.state.name,
                    email: this.state.email,
                    password: this.state.password,

                }
            });
        }

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="card">
                    <div className="cardHeader">Create Account</div>
                    <div className="inputGroup">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                            onChange={this.onName}
                        />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            title="Email must look similar to this example@example.com"
                            onChange={this.onEmail}
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*()]).{8,}'
                            title="Password must contain Uppercase, Lowercase, Numbers, and Symbols"
                            onChange={this.firstPass}

                        />
                        <input
                            type="password"
                            name="passwordConfirm"
                            id="passwordConfirm"
                            placeholder="Confirm Password"
                            pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*()]).{8,}'
                            title="Password must contain Uppercase, Lowercase, Numbers, and Symbols"
                            onChange={this.secondPass}
                        />
                        <label
                            style={{
                                color: 'red',
                            }}
                        >{this.state.message}</label>

                    </div>

                    <button type="submit" value="Submit"> Sign Up </button>
                </div>
            </form>
        );
    }
}

export default RegisterForm;