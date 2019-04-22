import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Switch, Route, withRouter} from 'react-router-dom';
import './App.css';
import NavBar from './components/FrontPage/NavBar';
import FrontPage from './components/FrontPage/FrontPage';
import RegistrationPage from './components/Registration/RegistrationPage';
import Dashboard from './components/Dashboard/Dashboard';
import CreateWorkoutPage from './components/CreateWorkout/CreateWorkoutPage';
import {refreshAuthToken} from './actions/Auth';
import EditWorkoutPage from "./components/EditWorkout/EditWorkoutPage";
import ConfirmationEditWorkoutPage from "./components/EditWorkout/EditConfirmation";
import DeleteConfirmationWorkoutPage from "./components/DeleteConfirmation/DeleteConfirmation";
import LoginPage from "./components/Login/LoginPage"

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
        <div className="wrapper">
            <NavBar/>
            <Switch>
            <Route exact path="/" component={FrontPage} />
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/register" component={RegistrationPage}/>
            <Route exact path="/create-workout" component={CreateWorkoutPage}/>
            <Route exact path="/edit-workout/:id" component={EditWorkoutPage}/>
            <Route exact path="/edit-confirmation/:id" component={ConfirmationEditWorkoutPage}/>
            <Route exact path="/delete-confirmation/:id" component={DeleteConfirmationWorkoutPage}/>
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
