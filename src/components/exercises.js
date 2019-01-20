import React from 'react';
import { withRouter } from 'react-router-dom';
import '../css/workout-view.css';

export class Exercise extends React.Component {
     render() {
         return(
            <div className="exercises">
                <ul className="exercise-list">
                    <li className="exercise-name">{this.props.name}</li>
                    <ul className="exercise-info">
                        <li className="reps"><b>Reps :</b> {this.props.reps}</li>
                        <li className="sets"><b>Sets : </b>{this.props.sets}</li>
                        <li className="weight"><b>Weight (lbs) : </b>{this.props.weight}</li>
                    </ul>
                </ul>
            </div>
         )
     }
};





export default (withRouter)(Exercise);