import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import CreateWorkoutForm from './CreateWorkoutForm'
import "./CreateWorkout.css"

export function CreateWorkoutPage(props) {

    if (props.loggedIn) {
        return (
        <div className="container">
            <div className="create-page">
                <div className="form-create">
                    <CreateWorkoutForm />
                </div>
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