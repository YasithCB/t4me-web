import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

const Login = () => {
  const [buttonText, setButtonText] = useState("Login");

  const swapLogin = () => {
    if (buttonText == "Login") {
      setButtonText("Signup");
    } else {
      setButtonText("Login");
    }
  };

  return (
    <div className="container-fluid position-relative bg-dark">
      <img
        src="./images/login/bg.jpg"
        class="img-fluid position-absolute top-0 start-0 h-100 w-100 opacity-50"
        alt="Image Description"
      ></img>
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-6">
          <div className="card bg-dark text-light opacity-90">
            <div className="card-body">
              <form className="p-3">
                <h5 className="card-title pb-2">{buttonText}</h5>
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
                  <button
                    type="submit"
                    className="btnLogin btn btn-primary col-4"
                  >
                    {buttonText}
                  </button>
                  <div className="col-7 column d-flex justify-content-center align-items-center gap-3">
                    <p className="m-0">
                      Don't Have an Account?{" "}
                    </p>
                    <p
                      onClick={swapLogin}
                      className="btn btn-sm btn-outline-primary m-0"
                    >
                      {buttonText} now
                    </p>
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
