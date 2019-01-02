import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import Workouts from './workout-view';
import {fetchWorkoutData} from "../actions/protected-data";

export class Dashboard extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchWorkoutData());
    }

    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>
                <div className="dashboard-protected-data">
                    <Workouts/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        workouts: state.workouts.workouts
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
