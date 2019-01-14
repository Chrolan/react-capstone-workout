import React from 'react'
import {Field, FieldArray, focus, reduxForm} from 'redux-form'
import {editWorkoutData} from "../actions/protected-data";
import {Redirect , withRouter} from 'react-router-dom';
import {isTrimmed, nonEmpty, required} from "../validators";
import Input from "./input";
import {connect} from "react-redux";

export class EditWorkoutForm extends React.Component {

    onSubmit(values) {
        const _id = this.props.initialValues._id;
        const {name , date, exercises} = values;
        const workout = {name , date, exercises, _id};
        return this.props
            .dispatch(editWorkoutData(workout))
            .then(()=>{
                return <Redirect to="/" push />
            })
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
                className="edit-workout-form"
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
                    Save!
                </button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    initialValues: state.workouts.currentWorkout,
});

const initializeForm =  reduxForm({
    form: 'editWorkout',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('editWorkout', Object.keys(errors)[0]))
})(EditWorkoutForm);

export default withRouter(connect(mapStateToProps)(initializeForm));