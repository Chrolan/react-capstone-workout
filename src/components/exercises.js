import React from 'react';
import { withRouter } from 'react-router-dom';

export class Exercise extends React.Component {
     render() {
         return(
            <div className="exercises">
                <ul className="exercise-list">
                    <li className="exercise-name">Exercise: {this.props.name}</li>
                    <ul className="exercise-info">
                        <li className="reps">Reps : {this.props.reps}</li>
                        <li className="sets">Sets : {this.props.sets}</li>
                        <li className="weight">Weight : {this.props.weight}</li>
                    </ul>
                </ul>
            </div>
         )
     }
};





export default (withRouter)(Exercise);