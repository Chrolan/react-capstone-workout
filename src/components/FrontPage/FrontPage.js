import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './FrontPage.css'

export function FrontPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="home row page">
            <div className="empty col-4">
                &nbsp;
            </div>
            <div className="welcome-message col-4">
                <h2>How it works</h2>
                <h4>Create your exercises</h4>
                <p>You can create exercises with ease, just by naming and adding exercises</p>
                <h4>Track your workouts</h4>
                <p>After creating your work outs, the dashboard will be your one stop to view and edit</p>
                <button className="submit-button col-4" onClick={()=> {return props.history.push('/login')}}>Login</button>
                <div className="col-12">
                    <h3>Please use the following account to see a demo:</h3>
                    <ul>
                        <li>User: demo</li>
                        <li>Password: demo123456</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(FrontPage);