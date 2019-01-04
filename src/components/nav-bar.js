import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from "../actions/auth";
import {clearAuthToken} from '../local-storage';
import { Link } from 'react-router-dom';

export class NavBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        let logOutButton, myDashboardButton, createWorkoutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <li className="logout-button" onClick={() => this.logOut()}><Link to="/" >Log out</Link></li>
            );
        }
        if (this.props.loggedIn) {
            myDashboardButton = (
                <li className="workout-page-button"><Link to="/dashboard">Dashboard</Link></li>
            )
        }
        if (this.props.loggedIn) {
            createWorkoutButton = (
                <li className="create-workout-button"><Link to="/create-workout">Create new work out</Link></li>
            )
        }
        return (
            <div className="nav-bar">
                <h1>Jordi's Workout App</h1>
                <ul>
                    {myDashboardButton}
                    {createWorkoutButton}
                    {logOutButton}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavBar);