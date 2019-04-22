import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from '../Login/RequiresLogin';
import Workouts from '../WorkoutView/WorkoutView';
import {fetchWorkoutData} from "../../actions/ProtectedData";
import './Dashboard.css'

export class Dashboard extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchWorkoutData());
    }

    render() {

        return (
            <div className="dashboard container">
                <h2>My Workouts</h2>
                    <Workouts/>
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
