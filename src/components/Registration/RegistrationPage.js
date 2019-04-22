import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import './Registration.css';
import RegistrationForm from './RegisterForm';

export function RegistrationPage(props) {

    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="register-page">
            <div className="form">
            <h2>Register Account</h2>
              <RegistrationForm />
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
