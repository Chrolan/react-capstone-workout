import React from 'react';
import {connect} from 'react-redux';
import Workout from './Workout'
import './Workout.css';
import {withRouter} from "react-router";

export class Workouts extends React.Component {

    render () {
        const workouts = this.props.workoutList;

        const listOfWorkouts = workouts.map((workout, index) => {
            return (
                <Workout {...workout} key={index} id={index}/>
            )}
        );

        return(
            <div className="workouts">
                {listOfWorkouts}
            </div>
    )
}}

const mapStateToProps = state => {
    return {
        workoutList: state.workouts.workouts
    };
};

export default withRouter(connect(mapStateToProps)(Workouts));