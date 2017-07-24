import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Multiselect from 'react-widgets/lib/Multiselect';
import 'react-widgets/dist/css/react-widgets.css';

const validate = (values) => {
  const errors = {};
  if (!values.projectName) {
    errors.projectName = 'Required';
  } else if (values.projectName.length < 2) {
    errors.projectName = 'Must be 2 characters or more';
  } else if (values.projectName.length > 15) {
    errors.projectName = 'Must be 15 characters or less';
  }
  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="form-group">
    <label>{label}</label>
    <div>
      <input className="form-control" {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const SyncValidationForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const technologies = [
    'angular',
    'CSS',
    'cPlusPlus',
    'go',
    'gulp',
    'java',
    'jQuery',
    'js',
    'node',
    'react',
    'ruby',
    'swift',
    'WordPress',
    'sass',
    'html',
    'TypeScript'];
  return (
    <form onSubmit={handleSubmit} className="form-g">
      <Field
        label="Project name"
        className="form-control"
        name="projectName"
        component={renderField}
        type="text"
        placeholder="Input Project Name"
      />
      <Field
        label="Project repository path"
        className="form-control"
        name="reposPath"
        component={renderField}
        type="text"
        placeholder="Input repository remote path"
      />

      <div className="form-group">
        <label>Email</label>
        <div>
          <Multiselect
            placeholder="Technologies used in project"
            data={technologies}
          />
        </div>
      </div>
      <div className="form-group">
        <label>Base technology</label>
        <div>
          <Field
            name="favoriteColor"
            component="select"
            className="form-control"
            placeholder="Base technology"
          >
            <option >Select technology</option>
            {technologies.map((techology, key) => (
              <option key={key} value={techology}>{techology}</option>
            ))}
          </Field>
        </div>
      </div>
      <div className="form-group">
        <label>Description</label>
        <div>
          <Field
            className="form-control"
            name="description"
            component="textarea"
          />
        </div>
      </div>
      <div>
        <button className="btn btn-default" type="submit" disabled={submitting}>Submit</button>
        <button className="btn btn-default" type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'syncValidation',  // a unique identifier for this form
  validate,               // <--- warning function given to redux-form
})(SyncValidationForm);
