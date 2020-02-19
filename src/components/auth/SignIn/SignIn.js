import React from 'react'

function SignIn() {
    return (
        <div className="container">
          <h2 className="text-center pb-2" />
        <div className="row">
          <div className="col-lg-6 col-12 pb-3">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="text-center mb-4">SIGN IN</h2>
                <form className="py-2" role="form">
                  <div className="form-group">
                    <label htmlFor="inputEmailForm" className="sr-only form-control-label">Email</label>
                    <div className="mx-auto col-sm-10">
                      <input type="text" className="form-control" id="inputEmailForm" placeholder="email" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputPasswordForm" className="sr-only form-control-label">Password</label>
                    <div className="mx-auto col-sm-10">
                      <input type="text" className="form-control" id="inputPasswordForm" placeholder="password" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="mx-auto col-sm-10">
                      <div className="checkbox form-control form-control-sm text-center small">
                        <label className>
                          <input type="checkbox" className /> remember me</label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="mx-auto col-sm-10 pb-3 pt-2">
                      <button type="submit" className="btn btn-outline-secondary btn-lg btn-block">Sign-in</button>
                    </div>
                  </div>
                </form>
                <ul className="list-inline text-center">
                  <li className="list-inline-item px-3"><a href title="Twitter"><i className="display-3 ion-social-twitter-outline" /></a>&nbsp; </li>
                  <li className="list-inline-item px-3"><a href title="Google"><i className="display-3 ion-social-googleplus-outline" /></a>&nbsp; </li>
                  <li className="list-inline-item px-3"><a href title="Facebook"><i className="display-3 ion-social-facebook-outline" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>  
       
        </div>

    )
}

export default SignIn
