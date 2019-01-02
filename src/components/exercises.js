import React from 'react';
import { withRouter } from 'react-router-dom';

export class Exercise extends React.Component {
     render() {
         console.log(this.props);
         return(
            <div className="exercise">
                 <span className="workout-name">{this.props.name}</span>
            </div>
         )
     }
};





export default (withRouter)(Exercise);