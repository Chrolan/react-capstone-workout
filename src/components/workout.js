import React from 'react';
import {connect} from 'react-redux';
import Exercise from './exercises';
import moment from 'moment';
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
                 <div className="workout" id={this.props.id}>
                     <div className="empty col-3">
                        &nbsp;
                    </div>
                     <div className="workout col-6">
                         <h3 className="workout-name"><b>Workout:</b>            {this.props.name}</h3>
                         <p className="workout-date">{newFormattedDate}</p>
                             <div className="exercises">
                                 <h4>Exercises</h4>
                                 {listOfExercises}
                             </div>
                     </div>
                     <div className="buttons row">
                         <div className="empty col-3">
                            &nbsp;
                        </div>
                         <div className="col-6">
                            <button className="submit-button button-container" onClick={()=> this.editWorkout()}>Edit Workout</button>
                         </div>
                     </div>
                     <div className="buttons row">
                         <div className="empty col-3">
                            &nbsp;
                        </div>
                         <div className="col-6">
                            <button className="submit-button button-container" onClick={()=> this.deleteWorkout()}>Delete Workout</button>
                         </div>
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


export default withRouter(connect(mapStateToProps)(Workout));