import React from 'react';
import {connect} from 'react-redux';
import Exercise from './exercises';
import moment from 'moment';
import {deleteWorkoutData, fetchSingleWorkoutData, fetchWorkoutData} from '../actions/protected-data';
import { Link} from 'react-router-dom';
import { withRouter } from "react-router";

export class Workout extends React.Component {

     render() {
         
        const workout = this.props.workoutList[this.props.id];

        const listOfExercises = workout.exercises.map((exercise, index) => {
            return (
                <Exercise {...exercise} key={index} id={index}/>
            )}
        );

        const newFormattedDate = moment(this.props.date).format('LL');

         return(
             <div className="workout" id={this.props.id}>
                 <h3 className="workout-name">{this.props.name}</h3>
                 <span className="workout-date">{newFormattedDate}</span>
                 <div className="exercises">
                     {listOfExercises}
                 </div>
                 <Link to={`/delete-confirmation/${this.props._id}`}><button type="button">Delete Workout</button></Link>
                 <Link to={`/edit-confirmation/${this.props._id}`}><button type="button">Edit Workout</button></Link>
             </div>

         )
     }
};


const mapStateToProps = state => {
    return {
        workoutList: state.workouts.workouts
    };
};


export default withRouter(connect(mapStateToProps)(Workout));