import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth";
import axios from "axios";

const Login = () => {
  const [buttonText, setButtonText] = useState("Login");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  //form handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (buttonText === "Signup") {
      try {
        const res = await axios.post(
          "http://localhost:8080/api/v1/auth/register",
          {
            name,
            email,
            password,
          }
        );

        if (res && res.data.success) {
          toast.success(res.data.message);
          swapLogin();
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong !!!");
      }
    } 
    else {
      try {
        const res = await axios.post(
          "http://localhost:8080/api/v1/auth/login",
          { email, password }
        );

        if (res && res.data.success) {
          toast.success(res.data.message);
          setAuth({
            ...auth,
            user: res.data.user,
            token: res.data.token,
          });
          localStorage.setItem("auth", JSON.stringify(res.data));
          navigate(location.state || "/");
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong !!! ");
      }
    }
  };

  const swapLogin = () => {
    if (buttonText === "Login") {
      setButtonText("Signup");
    } else {
      setButtonText("Login");
    }
  };

  return (
    <div className="container-fluid position-relative bg-dark">
      <img
        src="./images/login/bg.jpg"
        className="img-fluid position-absolute top-0 start-0 h-100 w-100 opacity-50"
        alt="Image Description"
      ></img>
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-6">
          <div className="card bg-dark text-light opacity-90">
            <div className="card-body">
              <form className="form_area p-3" onSubmit={handleSubmit}>
                <h5 className="card-title pb-2">{buttonText}</h5>

                {buttonText === "Signup" && (
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label text-light">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputName"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      required
                    />
                  </div>
                )}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-light">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label text-light">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    required
                  />
                </div>
                {buttonText === "Signup" && (
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label text-light">
                      Re-enter Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="inpuReEnterPassword"
                      value={reEnterPassword}
                      onChange={(e) => {
                        setReEnterPassword(e.target.value);
                      }}
                      required
                    />
                  </div>
                )}

                <div className="row d-flex ps-2">
                  <button
                    type="submit"
                    className="btn btn-primary col-4"
                  >
                    {buttonText}
                  </button>
                  <div className="col-7 column d-flex justify-content-center align-items-center gap-3">
                    <p className="m-0">
                      {" "}
                      {buttonText === "Login"
                        ? "Haven't Account yet?"
                        : "Already have an Account?"}{" "}
                    </p>
                    <p
                      onClick={swapLogin}
                      className="btn btn-sm btn-outline-primary m-0"
                    >
                      {buttonText === "Login" ? "Signup" : "Login"} now
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
