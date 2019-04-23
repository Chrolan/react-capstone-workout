import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import EditWorkoutForm from "./EditWorkout";
import { withRouter } from "react-router";
import './EditWorkout.css'

export class EditWorkoutPage extends React.Component {

    render () {

    if (this.props.loggedIn) {
        return (
          <div className="container">
            <div className="edit-page">
                <div className="form-edit">
                    <EditWorkoutForm />
                </div>
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