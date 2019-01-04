import React from 'react';
import {Field, Form} from 'redux-form'
import Input from "./input";
import {withRouter} from "react-router-dom";

export class AddExercise extends React.Component {
    render () {
        return (
            <Field
                type="text"
                component={Input}
                name={this.props.id}
            />
        )
    }
}

const renderSubFields = (member, index, fields) => (
    <li key={index}>
      <button
        type="button"
        title="Remove Member"
        onClick={() => fields.remove(index)}/>
      <h4>Member #{index + 1}</h4>
      <Field
        name={`${member}.firstName`}
        type="text"
        component={renderField}
        label="First Name"/>
      <Field
        name={`${member}.lastName`}
        type="text"
        component={renderField}
        label="Last Name"/>
    </li>
)
const renderMembers = ({ fields }) => (
  <ul>
    <button type="button" onClick={() => fields.push({})}>Add Member</button>
    {fields.map(renderSubFields)}
  </ul>
)


export default (withRouter)(renderMembers);