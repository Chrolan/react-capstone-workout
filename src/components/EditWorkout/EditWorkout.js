import React from 'react'
import {Field, FieldArray, focus, reduxForm} from 'redux-form'
import {editWorkoutData} from "../../actions/ProtectedData";
import {withRouter} from 'react-router-dom';
import {isTrimmed, nonEmpty, required} from "../../Validators";
import Input from "../input";
import {connect} from "react-redux";
import './EditWorkout.css'

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
                  <div className="row">
                      <button
                      className="submit-button col-4"
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
            <ul className="row">
                {fields.map(renderExerciseFields)}
                <div className="button-container">
                  <button className="button add-button" type="button" onClick={() => fields.push({})}>Add Exercise</button>
                </div>
            </ul>
          </div>
        );

        return (
            <form
                className="edit-workout-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
              <div className="edit-header">
                <h2>Edit your workout</h2>
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
              </div>
                <FieldArray name="exercises" component={renderExercises}/>
                <div className="edit-button">
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