import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import EditWorkoutForm from "./edit-workout";
import { withRouter } from "react-router";
import {fetchSingleWorkoutData} from "../actions/protected-data";

export class EditWorkoutPage extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchSingleWorkoutData(this.props.match.params.id));
    }

    render () {

        console.log(this.props);

    if (this.props.loggedIn) {
        return (
        <div className="edit-workout">
            <h2>Edit Your Workout!</h2>
            <EditWorkoutForm />
        </div>
        );
    }
    else {
        return <Redirect to="/" />;
    }}
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    editingWorkout: state.workouts.currentWorkout,
});

export default withRouter(connect(mapStateToProps)(EditWorkoutPage));