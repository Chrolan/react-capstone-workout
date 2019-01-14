import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {deleteWorkoutData, fetchSingleWorkoutData} from "../actions/protected-data";

export class DeleteConfirmationWorkoutPage extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchSingleWorkoutData(this.props.match.params.id));
    }

    render () {

    const deleteWorkout = () => {
         return this.props
            .dispatch(deleteWorkoutData(this.props.deletingWorkout._id));
    };

    if (this.props.loggedIn) {
        return (
        <div className="edit-workout">
            <h3>Confirm you want to Delete Workout</h3>
            <Link to={`/dashboard`}><button type="button" onClick={deleteWorkout}>Confirm</button></Link>
            <Link to={`/dashboard`}><button type="button">Cancel</button></Link>
        </div>
        );
    }
    else {
        return <Redirect to="/" />;
    }}
}


const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    deletingWorkout: state.workouts.currentWorkout
});

export default withRouter(connect(mapStateToProps)(DeleteConfirmationWorkoutPage));
