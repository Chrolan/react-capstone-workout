import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../../actions/Users';
import {login} from '../../actions/Auth';
import { Link, Redirect } from 'react-router-dom'
import {required, nonEmpty, matches, length, isTrimmed} from '../../Validators';
import Input from '../input';
import './Registration.css'
const passwordLength = length({min: 10, max: 20});
const matchesPassword = matches('password');


export class RegistrationForm extends React.Component {
    onSubmit(values) {
        const {username, password, firstName, lastName, email} = values;
        const user = {username, password, firstName, lastName,email};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)))
            .then(<Redirect to="/" push />)
    }

    render() {
        return (
            <form
                className="register-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <Field
                    component={Input}
                    type="text"
                    name="firstName"
                    label="First Name"
                />
                <Field
                    component={Input}
                    type="text"
                    name="lastName"
                    label="Last Name"
                />
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    label="Username"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <Field
                    component={Input}
                    type="text"
                    name="email"
                    label="Email"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    label="Password"
                    validate={[required, passwordLength, isTrimmed]}
                />
                <Field
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    label="Confirm password"
                    validate={[required, nonEmpty, matchesPassword]}
                />
                <button
                    className="submit-button button-container"
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Register
                </button>
                <p>If you already an account, please <Link to="/login">Login</Link> page.</p>
            </form>
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);