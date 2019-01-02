import React from 'react';
import {connect} from 'react-redux';
import Workout from './workout'

export class Workouts extends React.Component {

    render () {
        const workouts = this.props.workoutList;
        const listOfWorkouts = workouts.map((workout, index) => {
            return (
                <Workout {...workout} key={index}/>
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

export default connect(mapStateToProps)(Workouts);