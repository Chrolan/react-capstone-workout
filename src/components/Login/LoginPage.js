import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import './Login.css';
import LoginForm from "./LoginForm";

export function LoginPage(props) {

    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="login row page">
            <div className="">
                <h2>Login to continue</h2>
                <LoginForm />
            </div>
            <div className="">
                <div className="message-container">
                    <p>If you do not have an account, please <Link to="/register">Register</Link></p>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);