import React from "react";
import '../style/common.css';


class RegisterForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pass: '',
            passTwo: '',
            message: '',
        }
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
            this.setState({
                message: ""
            })
            event.preventDefault();
            console.log("Matching passwords")
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
                        />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            title="Email must look similar to this example@example.com"
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