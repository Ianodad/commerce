import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import Joi from "joi-browser";
import Form from '../../common/Form';
class SignUp extends Form {

      onSubmit = formValues => {
    console.log(formValues)
    // console.log(this.props.onSubmit(formValues));
  }

    render () {
      return (
          <div>
              <h2 className="text-center pb-2" />
          <div className="row">
            <div className="col-lg-6 col-12 pb-3">
              <div className="card h-100">
                <div className="card-body">
                  <h2 className="text-center mb-4">Sign-up</h2>
                  <ul className="list-inline text-center py-2">
                    <li className="list-inline-item px-3"><a href title="Twitter"><i className="display-3 ion-social-twitter-outline" /></a>&nbsp; </li>
                    <li className="list-inline-item px-3"><a href title="Google"><i className="display-3 ion-social-googleplus-outline" /></a>&nbsp; </li>
                    <li className="list-inline-item px-3"><a href title="Facebook"><i className="display-3 ion-social-facebook-outline" /></a></li>
                  </ul>
                  <form role="form">
                     <Field name="email" component={this.renderInput} id="inputEmailForm" label="email" />
                     <Field name="password" component={this.renderInput} id="inputPasswordForm" label="password" />
                     <Field name="verify" component={this.renderInput} id="inputPasswordForm" label="verify password" />
                    <div className="form-group">
                      <div className="mx-auto col-sm-10 pb-3 pt-2">
                        <button type="submit" className="btn btn-outline-secondary btn-lg btn-block">Register</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>   
          </div>
      )
  }
}

const validate = (formValues) => {


  const schema = {
    email: Joi.string()
      .required()
      .label("Email"),
    password: Joi.string()
      .required()
      .label("Password"),
    verify : Joi.any()
      .valid(Joi.ref('password'))
      .required()
      .options({ language: { any: { allowOnly: 'must match password' } } })
  };

  const validateJoi = (data) => {

    const options = { abortEarly: false };
    const { error } = Joi.validate(data, schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
    
  };
  console.log(validateJoi(formValues))
  return validateJoi(formValues)

};



export default reduxForm({
  form: "signUp",
  validate
}) (SignUp)
