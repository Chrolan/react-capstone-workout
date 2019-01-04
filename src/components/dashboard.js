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
                <div className="dashboard-protected-data">
                    <h2>My Workouts</h2>
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
