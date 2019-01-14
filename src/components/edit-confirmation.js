import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {fetchSingleWorkoutData} from "../actions/protected-data";

export class ConfirmationEditWorkoutPage extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchSingleWorkoutData(this.props.match.params.id));
    }

    render () {

    if (this.props.loggedIn) {
        return (
        <div className="edit-workout">
            <h3>Confirm you want to Edit Workout</h3>
            <Link to={`/edit-workout/${this.props._id}`}><button type="button">Confirm</button></Link>
            <Link to={`/dashboard`}><button type="button">Cancel</button></Link>
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
