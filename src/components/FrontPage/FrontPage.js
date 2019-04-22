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
        <div className="front-page">
            <div id="title">
                <p>Push yourself to the limit</p>
            </div>
            <div className="container">
                <h1>Your personalized workout app</h1>
                <p>Have you ever gone through your workout and lost track of what you were doing that day? Or wanted to plan for next week while you have a second?
                With this web app, you can personalize your own workouts by entering the exercises associated with them. Don't be limited by a pre selected list, you can enter which ever naming convention that pleases you.</p>

                <h2>Track</h2>
                <p>You can view your history with one simple click of your workout.</p>

                <h2>Edit</h2>
                <p>Did your workout change half way through? No problem! you can always edit a pre planned workout or add exercises while you go.</p>

                <h2>Delete</h2>
                <p>Didn't get up off the couch today? No sweat, you can always delete the work out....no one is judging.</p>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(FrontPage);