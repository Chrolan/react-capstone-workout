import React from 'react';
import Input from '../input';
import {required, nonEmpty, isTrimmed} from '../../Validators';
import {Field, FieldArray, reduxForm, focus} from 'redux-form';
import { withRouter } from 'react-router-dom';
import {createWorkoutData} from "../../actions/ProtectedData";
import "./CreateWorkout.css"

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
        const renderExerciseFields = (exercise, index, fields) => (
            <li className="card-item" key={index}>
                <div className="card">
                  <div className="card-content">
                  <h4>Exercise {index + 1}</h4>
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
                    <div className="">
                        <button
                        className="remove-button"
                        type="button"
                        title="Remove Exercise"
                        onClick={() => fields.remove(index)}>
                            Remove Exercise
                        </button>
                    </div>
                  </div>
                </div>
            </li>
        );

        const renderExercises = ({ fields }) => (
          <div className="">
            <ul class="row">
                {fields.map(renderExerciseFields)}
                <div className="button-container">
                  <button className="button add-button" type="button" onClick={() => fields.push({})}>Add Exercise</button>
                </div>
            </ul>
          </div>
        );

        return (
            <form
                className="create-workout-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
              <div className="create-header">
                <h2>Create Your Workout</h2>
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
              </div>
                <FieldArray name="exercises" component={renderExercises}/>
                <div className="create-button">
                    <button
                        className="submit-button"
                        type="submit"
                        disabled={this.props.pristine || this.props.submitting}>
                        Save Workout
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