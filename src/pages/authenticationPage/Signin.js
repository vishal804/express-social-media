import React, { useEffect, useState } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginHandler } from "../../redux/reducer/authenticationSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((store) => store.authentication);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (token) {
      navigate("/feedpage");
    }
  }, [token, navigate]);

  const guestLogin = (e) => {
    e.preventDefault();
    dispatch(
      loginHandler({
        username: "steveroger",
        password: "steveroger",
      })
    );
  };
  return (
    <>
      <div className="login-page flex flex-center">
        <Formik
          className="form"
          onSubmit={(values) => {
            dispatch(loginHandler(values));
          }}
          initialValues={{
            username: "",
            password: "",
            acceptTerms: false,
          }}
          validate={(values) => {
            const errors = {};
            if (!values.password.trim()) {
              errors.password = "Required";
            }
            if (!values.username.trim()) {
              errors.username = "Required";
            }
            if (values.acceptTerms === false) {
              errors.acceptTerms = "Accept Terms & Conditions is required";
            }
            return errors;
          }}
        >
          <Form className="form">
            <div className="login-heading">Login</div>
            <div>
              <label htmlFor="email" className="form-label">
                Email or Username
              </label>
              <Field
                className="input"
                type="text"
                placeholder="Enter Email or Username"
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

            <div className="login-store flex flex-space-between">
              <label htmlFor="acceptTerms">
                <Field type="checkbox" name="acceptTerms" id="acceptTerms" />I
                accept all terms & conditions
                <ErrorMessage
                  className="error-message"
                  name="acceptTerms"
                  component="div"
                />
              </label>
            </div>

            <div className="form-btn">
              <button className="btn btn-primary btn-lg" type="submit">
                Login
              </button>
            </div>
            <button
              className="btn btn-primary btn-lg"
              onClick={guestLogin}
              type="button"
            >
              Guest Login
            </button>
            <div className="create-account flex flex-center">
              <Link to="/signup">
                <p>Don't have account? Create now</p>
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export { Signin };
