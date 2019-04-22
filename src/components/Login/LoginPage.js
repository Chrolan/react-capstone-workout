import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './Login.css';
import LoginForm from "./LoginForm";

export function LoginPage(props) {

    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="login-page">
            <div className="form">
                <h2>LOGIN</h2>
                <LoginForm />
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);