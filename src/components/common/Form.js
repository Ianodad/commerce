import React, { Component } from 'react'




class Form extends Component {

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header text-danger">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, id, meta}) => {

    const className = `form-group field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
    <div className={className}>
      <label htmlFor={id} className="sr-only form-control-label">{label}</label>
      <div className="mx-auto col-sm-10">
        <input {...input} type="text" className="form-control" id={id} placeholder={label} required />
        {this.renderError(meta)}
       </div>
    </div>
    )
  }



    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Form
