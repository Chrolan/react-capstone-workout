import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Switch, Route, withRouter} from 'react-router-dom';
import './App.css';
import NavBar from './components/nav-bar';
import FrontPage from './components/FrontPage';
import RegistrationPage from './components/registration-page';
import Dashboard from './components/dashboard';
import CreateWorkoutPage from './components/create-workout-page';
import {refreshAuthToken} from './actions/auth';
import EditWorkoutPage from "./components/edit-workout-page";

class App extends Component {

  componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 500
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }
        clearInterval(this.refreshInterval);
    }

  render() {
    return (
        <div className="app">
            <NavBar/>
            <Switch>
            <Route exact path="/" component={FrontPage} />
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/register" component={RegistrationPage}/>
            <Route exact path="/create-workout" component={CreateWorkoutPage}/>
            <Route exact path="/edit-workout/:id" component={EditWorkoutPage}/>
            </Switch>
        </div>
    );
  }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));
