import React from "react";
import '../style/common.css';


class RegisterForm extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="cardHeader">Create Account</div>
                <form className="inputGroup">
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
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Confirm Password"
                    />
                </form>
                <button>Sign Up</button>
            </div>
        );
    }
}

export default RegisterForm;