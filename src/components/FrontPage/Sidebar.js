import React from 'react';
import { Link } from 'react-router-dom'
import { clearAuth } from '../../actions/Auth'
import { clearAuthToken } from '../../LocalStorage'
import {connect} from 'react-redux';
import './FrontPage.css';
import { slide as Menu } from "react-burger-menu";

export class NavBar extends React.Component {

  logOut () {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render () {
    let logOutButton, myDashboardButton, createWorkoutButton, loginButton;
    if (this.props.loggedIn) {
      logOutButton = (
        <Link className="menu-item" onClick={() => this.logOut()} to="/">Log out</Link>
      );
    }
    if (this.props.loggedIn) {
      myDashboardButton = (
        <Link className="menu-item" to="/dashboard">Dashboard</Link>
      )
    }
    if (this.props.loggedIn) {
      createWorkoutButton = (
        <Link className="menu-item" to="/create-workout">Create Workout</Link>
      )
    }
    if (!this.props.loggedIn) {
      loginButton = (
        <Link className="menu-item" to="/login">Log In</Link>
      )
    }

    return (
      <Menu className="nav">
        {myDashboardButton}
        {createWorkoutButton}
        {logOutButton}
        {loginButton}
      </Menu>
    )
  }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavBar);