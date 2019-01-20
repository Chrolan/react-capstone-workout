import React from 'react';
import Input from './input';
import {required, nonEmpty, isTrimmed} from '../validators';
import {Field, FieldArray, reduxForm, focus} from 'redux-form';
import { withRouter } from 'react-router-dom';
import {createWorkoutData} from "../actions/protected-data";
import '../css/workout-view.css';

export class CreateWorkoutForm extends React.Component {

    onSubmit(values) {
        const {name , date, exercises} = values;
        const workout = {name , date, exercises}
        return this.props
            .dispatch(createWorkoutData(workout))
            .then(()=> {
              this.props.history.push('/dashboard')
            })
    }


    render() {

    console.log(this.props)

        const renderExerciseFields = (exercise, index, fields) => (
            <li key={index}>
                <div>
                  <h3>Exercise #{index + 1}</h3>
                </div>
              <Field
                name={`${exercise}.name`}
                type="text"
                component={Input}
                label="Name"
              />
              <Field
                name={`${exercise}.sets`}
                type="number"
                component={Input}
                label="Sets"
              />
                <Field
                name={`${exercise}.reps`}
                type="number"
                component={Input}
                label="Reps"
                />
                <Field
                name={`${exercise}.weight`}
                type="number"
                component={Input}
                label="Weight (lbs)"
                />
                <div className="row">
                    <button
                    className="submit-button col-4"
                    type="button"
                    title="Remove Exercise"
                    onClick={() => fields.remove(index)}>
                        Remove Exercise
                    </button>
                </div>
            </li>
        );

        const renderExercises = ({ fields }) => (
          <ul>
              {fields.map(renderExerciseFields)}
              <div className="row">
                <button className="submit-button col-4" type="button" onClick={() => fields.push({})}>Add Exercise</button>
              </div>
          </ul>
        );

        return (
            <form
                className="edit-workout-form row"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <Field
                    component={Input}
                    type="text"
                    name="name"
                    label="Workout Name"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <Field
                    component={Input}
                    type="date"
                    name="date"
                    label="Workout Date"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <FieldArray name="exercises" component={renderExercises}/>
                <div className="row">
                    <button
                        className="submit-button col-6"
                        type="submit"
                        disabled={this.props.pristine || this.props.submitting}>
                        Create!
                    </button>
                </div>
            </form>
        );
    }
}

CreateWorkoutForm = reduxForm({
    form: 'workoutCreator',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('workoutCreator', Object.keys(errors)[0]))
})(CreateWorkoutForm);

export default (withRouter)(CreateWorkoutForm)