import React from 'react';
import {connect} from 'react-redux';
import Exercise from './Exercises';
import moment from 'moment/moment';
import { withRouter } from "react-router"

export class Workout extends React.Component {

    deleteWorkout () {
            this.props.history.push(`/delete-confirmation/${this.props._id}`)
         }


     editWorkout () {
            this.props.history.push(`/edit-confirmation/${this.props._id}`)
         }

     render() {
         
        const workout = this.props.workoutList[this.props.id];

        const listOfExercises = workout.exercises.map((exercise, index) => {
            return (
                <Exercise {...exercise} key={index} id={index}/>
            )}
        );

        const newFormattedDate = moment(this.props.date).format('LL');

         return(
                 <div className="workout-card flex-item" id={this.props.id}>
                     <div className="">
                         <h3 className=""><b>Workout:</b>{this.props.name}</h3>
                         <p className="">{newFormattedDate}</p>
                                 <h4>Exercises</h4>
                                 {listOfExercises}
                     </div>
                      <button className="" onClick={()=> this.editWorkout()}>Edit Workout</button>
                      <button className="" onClick={()=> this.deleteWorkout()}>Delete Workout</button>
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