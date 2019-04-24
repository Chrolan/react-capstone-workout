import React from 'react';
import { Redirect } from 'react-router-dom';
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {fetchSingleWorkoutData} from "../../actions/ProtectedData";
import './EditWorkout.css'

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
          <div class="confirm-page">
            <div className="form edit">
                <h3>Confirm: Edit Workout</h3>
                <button className="confirm-button" onClick={()=> {this.editConfirmation()}}>Confirm</button>
                <button className="cancel-button" onClick={()=> {this.cancelEdit()}}>Cancel</button>
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

export default withRouter(connect(mapStateToProps)(ConfirmationEditWorkoutPage));
