import React from 'react';
import Input from './input';
import {required, nonEmpty, isTrimmed} from '../validators';
import {Field, reduxForm, focus} from 'redux-form';
import {Redirect} from 'react-router-dom';
import {createWorkoutData} from "../actions/protected-data";
import { FieldArray } from 'redux-form';  // ES6

export class CreateWorkoutForm extends React.Component {
    onSubmit(values) {
        const {name , date, exercises} = values;
        const workout = {name , date, exercises};
        return this.props
            .dispatch(createWorkoutData(workout))
            .then(<Redirect to="/your-new-location" push />)
    }


    render() {

        const renderExerciseFields = (exercise, index, fields) => (
            <li key={index}>

              <h4>Exercise #{index + 1}</h4>
              <Field
                name={`${exercise}.name`}
                type="text"
                component={Input}
                label="name"/>
              <Field
                name={`${exercise}.sets`}
                type="text"
                component={Input}
                label="sets"/>
                <Field
                name={`${exercise}.reps`}
                type="text"
                component={Input}
                label="reps"/>
                <Field
                name={`${exercise}.weight`}
                type="text"
                component={Input}
                label="weight"/>
                <button
                type="button"
                title="Remove Exercise"
                onClick={() => fields.remove(index)}>
                    Remove Exercise
                </button>
            </li>
        );

        const renderExercises = ({ fields }) => (
          <ul>
            <button type="button" onClick={() => fields.push({})}>Add Exercise</button>
            {fields.map(renderExerciseFields)}
          </ul>
        );

        return (
            <form
                className="workout-form"
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
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Create!
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'workoutCreator',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('workoutCreator', Object.keys(errors)[0]))
})(CreateWorkoutForm);