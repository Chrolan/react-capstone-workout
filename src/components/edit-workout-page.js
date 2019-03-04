import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import EditWorkoutForm from "./edit-workout";
import { withRouter } from "react-router";
import '../css/workout-view.css';

export class EditWorkoutPage extends React.Component {

    render () {

    if (this.props.loggedIn) {
        return (
        <div className="edit-workout">
            <div className="edit-workout-container row page">
                <h2>Edit Your Workout</h2>
                <EditWorkoutForm />
            </div>
        </div>
        );
    }
    else {
        return <Redirect to="/" />;
    }}
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(EditWorkoutPage));