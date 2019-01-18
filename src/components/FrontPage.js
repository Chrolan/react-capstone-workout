import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import '../css/workout-view.css';

import LoginForm from './login-form';


export function FrontPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/welcome" />;
    }

    return (
        <div className="home">
            <h2>Welcome to your work out App</h2>
            <div className="login-container">
                <LoginForm />
                <div className="row">
                    <h4 className="col-6">If you do not have an account, please <Link to="/register">Register</Link></h4>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(FrontPage);