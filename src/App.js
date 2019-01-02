import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import './App.css';

import NavBar from './components/nav-bar';
import FrontPage from './components/FrontPage';
import RegisterForm from './components/registration-page';
import Dashboard from './components/dashboard';
import {refreshAuthToken} from './actions/auth';

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
            <Route exact path="/" component={FrontPage} />
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/register" component={RegisterForm}/>
        </div>
    );
  }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));
