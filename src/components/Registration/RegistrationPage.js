import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import './Registration.css';
import RegistrationForm from './RegisterForm';

export function RegistrationPage(props) {

    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="register page">
            <h2>Register for the Workout App</h2>
            <div className="row">
            <RegistrationForm />
            </div>
            <div className="row">
                <div className="message-container">
                    <p>If you already an account, please <Link to="/login">Login</Link> page.</p>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
