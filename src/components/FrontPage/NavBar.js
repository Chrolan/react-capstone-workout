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
        let logOutButton, myDashboardButton, createWorkoutButton, loginButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <li className="" onClick={() => this.logOut()}><Link to="/" >Log out</Link></li>
            );
        }
        if (this.props.loggedIn) {
            myDashboardButton = (
                <li className=""><Link to="/dashboard">Dashboard</Link></li>
            )
        }
        if (this.props.loggedIn) {
            createWorkoutButton = (
                <li className=""><Link to="/create-workout">Create Workout</Link></li>
            )
        }
        if (!this.props.loggedIn) {
            loginButton = (
              <li className=""><Link to="/login">Log In</Link></li>
            )
        }
        return (
          <header>
              <div className="header">
                  <div>
                      <a href="/"><img className="logo" alt="" src="https://www.shareicon.net/data/128x128/2016/09/27/836589_weight_512x512.png"/></a>
                  </div>
                    <div className="company">
                        <h1>Workout Tracker</h1>
                    </div>
                <nav className="">
                    <ul className="">
                        {myDashboardButton}
                        {createWorkoutButton}
                        {logOutButton}
                        {loginButton}
                    </ul>
                </nav>
              </div>
          </header>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavBar);