import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import '../css/workout-view.css';

import RegistrationForm from './register-form';

export function RegistrationPage(props) {

    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    
    return (
        <div className="home row">
            <h2>Register for Jordi's Workout App</h2>
            <RegistrationForm />
            <Link to="/">Login</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
