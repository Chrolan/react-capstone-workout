import React from 'react';
import { Redirect } from 'react-router-dom';
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {deleteWorkoutData, fetchSingleWorkoutData} from "../../actions/ProtectedData";
import './DeleteConfirmation.css'

export class DeleteConfirmationWorkoutPage extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchSingleWorkoutData(this.props.match.params.id));
    }

     cancelDelete () {
        this.props.history.push('/dashboard')
     }

    deleteWorkout () {
             this.props.dispatch(deleteWorkoutData(this.props.deletingWorkout._id))
                 .then(()=> {
                     this.props.history.push('/dashboard')
                 })
        };

    render () {



    if (this.props.loggedIn) {
        return (
        <div className="edit-workout row">
            <h3>Confirm you want to Delete Workout</h3>
            <button className="submit-button col-6" onClick={()=> {this.deleteWorkout()}}>Confirm</button>
            <button className="submit-button col-6" onClick={()=> {this.cancelDelete()}}>Cancel</button>
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
