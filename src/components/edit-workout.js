import React from 'react'
import {Field, FieldArray, focus, reduxForm} from 'redux-form'
import {editWorkoutData} from "../actions/protected-data";
import {withRouter} from 'react-router-dom';
import {isTrimmed, nonEmpty, required} from "../validators";
import Input from "./input";
import {connect} from "react-redux";
import '../css/workout-view.css';

export class EditWorkoutForm extends React.Component {

    onSubmit(values) {
        const _id = this.props.initialValues._id;
        const {name , date, exercises} = values;
        const workout = {name , date, exercises, _id};
        console.log(workout);
        return this.props
            .dispatch(editWorkoutData(workout))
            .then(()=>{
              this.props.history.push('/dashboard')
            })
    }

    render() {

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
                className="workout-form row"
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
                />
                <FieldArray name="exercises" component={renderExercises}/>
                <div className="row">
                    <button
                        className="submit-button col-6"
                        type="submit">
                        Save!
                    </button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    initialValues: state.workouts.currentWorkout
});

const initializeForm =  reduxForm({
    form: 'editWorkout',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('editWorkout', Object.keys(errors)[0]))
})(EditWorkoutForm);

export default withRouter(connect(mapStateToProps)(initializeForm));