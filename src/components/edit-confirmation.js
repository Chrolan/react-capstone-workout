import React from 'react';
import { Redirect } from 'react-router-dom';
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {fetchSingleWorkoutData} from "../actions/protected-data";
import '../css/workout-view.css';

export class ConfirmationEditWorkoutPage extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchSingleWorkoutData(this.props.match.params.id));
    }

    editConfirmation () {
            this.props.history.push(`/edit-workout/${this.props.match.params.id}`)
         }

     cancelEdit () {
        this.props.history.push('/dashboard')
     }


    render () {

    if (this.props.loggedIn) {
        return (
        <div className="edit-workout row">
            <h3>Confirm you want to Edit Workout</h3>
            <button className="submit-button col-6" onClick={()=> {this.editConfirmation()}}>Confirm</button>
            <button className="submit-button col-6" onClick={()=> {this.cancelEdit()}}>Cancel</button>
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

export default withRouter(connect(mapStateToProps)(ConfirmationEditWorkoutPage));
