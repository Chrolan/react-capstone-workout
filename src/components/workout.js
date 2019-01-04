import React from 'react';
import {connect} from 'react-redux';
import Exercise from './exercises'
import moment from 'moment';
import { deleteWorkoutData } from '../actions/protected-data';

export class Workout extends React.Component {

     render() {
         
        const workout = this.props.workoutList[this.props.id];

        const listOfExercises = workout.exercises.map((exercise, index) => {
            return (
                <Exercise {...exercise} key={index} id={index}/>
            )}
        );

        const deleteWorkout = () => {
            return this.props
                .dispatch(deleteWorkoutData(this.props._id))
        };

        const newFormattedDate = moment(this.props.date).format('LL');

         return(
             <div className="workout" id={this.props.id}>
                 <h3 className="workout-name">{this.props.name}</h3>
                 <span className="workout-date">{newFormattedDate}</span>
                 <div className="exercises">
                     {listOfExercises}
                 </div>
                 <button type="button" onClick={deleteWorkout}>Delete Workout</button>
             </div>

         )
     }
};


const mapStateToProps = state => {
    return {
        workoutList: state.workouts.workouts
    };
};


export default connect(mapStateToProps)(Workout);