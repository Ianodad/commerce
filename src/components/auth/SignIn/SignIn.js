import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import Joi from "joi-browser";
import Form from '../../common/Form';

import Social from './Social'




class SignIn extends Form {

  onSubmit = formValues => {
    console.log(formValues)
    // console.log(this.props.onSubmit(formValues));
  };

  render() {
    return (
        <div className="container">
          <h2 className="text-center pb-2" />
        <div className="row">
          <div className="col-lg-6 col-12 pb-3">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="text-center mb-4">SIGN IN</h2>
                <form className="py-2" onSubmit={this.props.handleSubmit(this.onSubmit)} role="form">
                <Field name="email" component={this.renderInput} id="inputEmailForm" label="email" />
                <Field name="password" component={this.renderInput} id="inputPasswordForm" label="password" />
                  {/* <div className="form-group">
                    <div className="mx-auto col-sm-10">
                      <div className="checkbox form-control form-control-sm text-center small">
                        <label className>
                          <input type="checkbox" className="" /> remember me</label>
                      </div>
                    </div>
                  </div> */}
                  <div className="form-group">
                    <div className="mx-auto col-sm-10 pb-3 pt-2">
                      <button type="submit" className="btn btn-outline-secondary btn-lg btn-block">Sign-in</button>
                    </div>
                  </div>
                </form>
                <Social/>
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
      .label("Password")
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
  form: "signIn",
  validate
}) (SignIn)
