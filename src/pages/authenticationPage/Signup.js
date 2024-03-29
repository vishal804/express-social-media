import React, { useEffect, useState } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupHandler } from "../../redux/reducer/authenticationSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.authentication);
  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  useEffect(() => {
    if (token) {
      navigate("/feedpage");
    }
  }, [token, navigate]);

  return (
    <>
      <div className="login-page flex flex-center">
        <Formik
          className="form"
          onSubmit={(values) => {
            dispatch(signupHandler(values));
          }}
          initialValues={{
            username: "",
            confirmPassword: "",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            acceptTerms: false,
          }}
          validate={(values) => {
            const errors = {};

            if (!values.firstName.trim()) {
              errors.firstName = "Required";
            }
            if (!values.lastName.trim()) {
              errors.lastName = "Required";
            }
            if (!values.username) {
              errors.username = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username)
            ) {
              errors.username = "Invalid email address";
            }
            if (!values.password.trim()) {
              errors.password = "Required";
            }
            if (!values.confirmPassword.trim()) {
              errors.confirmPassword = "Required";
            }

            if (values.password !== values.confirmPassword) {
              errors.confirmPassword =
                "Password and confirm password doesn't match";
            }
            if (values.acceptTerms === false) {
              errors.acceptTerms = "Accept Terms & Conditions is required";
            }
            return errors;
          }}
        >
          {() => (
            <Form className="form">
              <div className="login-heading">SIGN UP</div>

              <div>
                <label htmlFor="name" className="form-label">
                  Firstname
                </label>
                <Field
                  className="input"
                  type="text"
                  placeholder="Enter Firstname"
                  name="firstName"
                />
                <ErrorMessage
                  className="error-message"
                  name="firstName"
                  component="div"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="form-label">
                  Surname
                </label>
                <Field
                  className="input"
                  type="text"
                  placeholder="Enter Surname"
                  name="lastName"
                />
                <ErrorMessage
                  className="error-message"
                  name="lastName"
                  component="div"
                />
              </div>

              <div>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <Field
                  className="input"
                  type="text"
                  placeholder="Enter Email"
                  name="username"
                />
                <ErrorMessage
                  className="error-message"
                  name="username"
                  component="div"
                />
              </div>

              <div>
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="show-hide-password">
                  <Field
                    id="create-password"
                    className="input"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    name="password"
                  />
                  <div
                    className="show-password"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    show
                  </div>
                </div>
                <ErrorMessage
                  className="error-message"
                  name="password"
                  component="div"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <div className="show-hide-password">
                  <Field
                    id="confirm-password"
                    className="input"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    name="confirmPassword"
                  />
                  <div
                    className="show-password"
                    onClick={() => {
                      setShowConfirmPassword(!showConfirmPassword);
                    }}
                  >
                    show
                  </div>
                  <ErrorMessage
                    className="error-message"
                    name="confirmPassword"
                    component="div"
                  />
                </div>

                <div className="login-store flex flex-space-between">
                  <label htmlFor="acceptTerms">
                    <Field type="checkbox" name="acceptTerms" />I accept all
                    terms & conditions
                    <ErrorMessage
                      className="error-message"
                      name="acceptTerms"
                      component="div"
                    />
                  </label>
                </div>
              </div>

              <div className="form-btn">
                <button className="btn btn-primary btn-lg" type="submit">
                  Create New Account
                </button>
              </div>

              <div className="create-account flex flex-center">
                <Link to="/signin">
                  <p>Already have an account? Login here</p>
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export { Signup };
