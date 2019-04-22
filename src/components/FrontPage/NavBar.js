import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from "../../actions/Auth";
import {clearAuthToken} from '../../LocalStorage';
import { Link } from 'react-router-dom';
import './FrontPage.css';

export class NavBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        let logOutButton, myDashboardButton, createWorkoutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <li className="logout-button col-3" onClick={() => this.logOut()}><Link to="/" >Log out</Link></li>
            );
        }
        if (this.props.loggedIn) {
            myDashboardButton = (
                <li className="workout-page-button col-3"><Link to="/dashboard">Dashboard</Link></li>
            )
        }
        if (this.props.loggedIn) {
            createWorkoutButton = (
                <li className="create-workout-button col-3"><Link to="/create-workout">Create Workout</Link></li>
            )
        }
        return (
            <nav role="navigation" id="nav-bar" className="nav-bar">
                <div className="nav-container row">
                    <h1 className={"title " + (this.props.loggedIn ? 'col-3' : 'col-12')}>Workout Tracker</h1>
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