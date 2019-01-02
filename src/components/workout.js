import React from 'react';
import {connect} from 'react-redux';
import Exercise from './exercises'

export class Workout extends React.Component {

     render() {
         
        const workout = this.props.workoutList[this.props.id];

        const listOfExercises = workout.exercises.map((exercise, index) => {
            return (
                <Exercise {...exercise} key={index} id={index}/>
            )}
        );

         return(
             <div className="workout">
                 <span className="workout-name">{this.props.name}</span>
                 <span className="workout-date">{this.props.date}</span>
                 <div className="exercises">
                     {listOfExercises}
                 </div>
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