import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from "../actions/auth";
import {clearAuthToken} from '../local-storage';
import { Link } from 'react-router-dom';
import '../css/workout-view.css';

export class NavBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        let logOutButton, myDashboardButton, createWorkoutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <li className="logout-button col-4" onClick={() => this.logOut()}><Link to="/" >Log out</Link></li>
            );
        }
        if (this.props.loggedIn) {
            myDashboardButton = (
                <li className="workout-page-button col-4"><Link to="/dashboard">Dashboard</Link></li>
            )
        }
        if (this.props.loggedIn) {
            createWorkoutButton = (
                <li className="create-workout-button col-4"><Link to="/create-workout">Create Workout</Link></li>
            )
        }
        return (
            <nav role="navigation" id="nav-bar" className="nav-bar">
                <div className="nav-container row">
                    <h1>Jordi's Workout App</h1>
                    <ul className="nav-bar-items">
                        {myDashboardButton}
                        {createWorkoutButton}
                        {logOutButton}
                    </ul>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavBar);