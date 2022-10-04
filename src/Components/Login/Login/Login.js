import { Button, CardContent } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Card } from "react-bootstrap";
import GoogleIcon from "@mui/icons-material/Google";

import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const {
    signInUsingGoogle,
    handleRegistration,
    handleNameChange,
    handleResetPassword,
    toggleLogin,
    handlePasswordChange,
    handleEmailChange,
    isLogin,
    error,
  } = useAuth();

  const location = useLocation();
  const history = useNavigate();

  const redirect_url = location.state?.from || "/home";
  console.log(redirect_url);
  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history(redirect_url);
    });
  };

  return (
    <>
      <div className="container" style={{ height: " 100vh" }}>
        <div className=" backgrouundStyle2 m-5  d-flex justify-content-center row">
          <div className="p-3 m-4 col-sm-6">
            <form onSubmit={handleRegistration}>
              <h3>Please {isLogin ? "Login" : "Register"}</h3>
              {!isLogin && (
                <div className="mb-3">
                  <label for="" className="form-label">
                    Name
                  </label>

                  <input
                    onBlur={handleNameChange}
                    type="text"
                    className="form-control"
                    aria-describedby=""
                  />
                </div>
              )}

              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>

                <input
                  onBlur={handleEmailChange}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>

              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  onBlur={handlePasswordChange}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <div class="form-check">
                <input
                  onChange={toggleLogin}
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Already Register
                </label>
              </div>
              <p className="text-danger">{error}</p>
              <button
                type="submit"
                className="btn btn-xs sm:btn-sm md:btn-md btn-warning mr-5 "
              >
                {isLogin ? "Login" : "Register"}
              </button>

              <button
                type="button"
                onClick={handleResetPassword}
                class="btn sm:btn-sm md:btn-md btn-warning "
              >
                Reset Password
              </button>
            </form>
          </div>

          <div className="p-5 d-flex align-items-center col-sm-3">
            <div>
              <div>
                <small>Or, login with</small>
              </div>
              <Button
                className="buttonWeight"
                variant="contained"
                color="error"
                onClick={handleGoogleLogin}
              >
                <span>
                  <GoogleIcon />
                </span>{" "}
                GOOGLE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
