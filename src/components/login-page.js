import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import '../css/workout-view.css';
import LoginForm from "./login-form";

export function LoginPage(props) {

    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="login">
            <h2>Login to your workout app</h2>
            <div>
                <LoginForm />
            </div>
            <div className="row">
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