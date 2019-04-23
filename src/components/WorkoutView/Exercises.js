import React from 'react';
import { withRouter } from 'react-router-dom';
import './Workout.css'

export class Exercise extends React.Component {
     render() {
         return(
            <li className="exercises">
                <h4 className="exercise-name">{this.props.name}</h4>
                <ul className="exercise-info">
                    <li className="reps"><b>Reps :</b> {this.props.reps}</li>
                    <li className="sets"><b>Sets : </b>{this.props.sets}</li>
                    <li className="weight"><b>Weight (lbs) : </b>{this.props.weight}</li>
                </ul>
            </li>
         )
     }
};





export default (withRouter)(Exercise);