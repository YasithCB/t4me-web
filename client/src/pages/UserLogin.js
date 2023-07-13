import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-6">
          <div className="card bg-dark text-light">
            <div className="card-body">
              <form className="p-3">
                <h5 className="card-title pb-2">Login</h5>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-light">
                    Email address
                  </label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label text-light">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                  />
                </div>
                <div className="row d-flex ps-2">
                  <button type="submit" className="btn btn-primary col-4">
                    Login
                  </button>
                  <div className="col-7 column">
                    <p className="col-8 align-items-center m-0">
                      Don't Have an Account?{" "}
                    </p>
                    <a href="">SignUp now</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
