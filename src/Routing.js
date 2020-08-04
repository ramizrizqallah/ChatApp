import RegisterForm from './Components/RegisterForm';
import LogIn from './Components/LogIn';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { AuthContext } from "./context/auth";
import PrivateRoute from './Components/PrivateRoute';
import React, { useState } from "react";
import LandingPage from './Components/LandingPage';
import MainPage from './Components/MainPage';

function Routing(props) {
    const [authTokens, setAuthTokens] = useState();
    const setTokens = (data) => {
        localStorage.setItem("tokens", JSON.stringify(data));
        setAuthTokens(data);
    }
    return (
        <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
            <Router>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/register" component={RegisterForm} />
                <Route exact path="/login" component={LogIn} />
                <PrivateRoute path="/admin" component={MainPage} />
            </Router>
        </AuthContext.Provider>

    );
}

export default Routing;