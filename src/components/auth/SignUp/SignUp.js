import React from 'react'

function SignUp() {
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
                  <div className="form-group">
                    <label htmlFor="input2EmailForm" className="sr-only form-control-label">email</label>
                    <div className="mx-auto col-sm-10">
                      <input type="text" className="form-control" id="input2EmailForm" placeholder="email" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="input2PasswordForm" className="sr-only form-control-label">password</label>
                    <div className="mx-auto col-sm-10">
                      <input type="text" className="form-control" id="input2PasswordForm" placeholder="password" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="input2Password2Form" className="sr-only form-control-label">verify</label>
                    <div className="mx-auto col-sm-10">
                      <input type="text" className="form-control" id="input2Password2Form" placeholder="verify password" required />
                    </div>
                  </div>
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

export default SignUp
