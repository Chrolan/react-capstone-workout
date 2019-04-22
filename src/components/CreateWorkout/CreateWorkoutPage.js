import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import CreateWorkoutForm from './CreateWorkoutForm'
import "./CreateWorkout.css"

export function CreateWorkoutPage(props) {

    if (props.loggedIn) {
        return (
        <div className="create-workout">
            <div className="row page">
                <h2>Create Your Workout!</h2>
                <CreateWorkoutForm />
            </div>
        </div>
        );
    }

    else {
        return <Redirect to="/" />;
    }

}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(CreateWorkoutPage);