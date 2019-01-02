import React from 'react';
import { withRouter } from 'react-router-dom';

export class Exercise extends React.Component {
     render() {
         return(
            <div className="exercise">
                 <span className="workout-name">{this.props.exercise}</span>
            </div>
         )
     }
};





export default (withRouter)(Exercise);