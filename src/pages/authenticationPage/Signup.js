import React, { useEffect, useState } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupHandler } from "../../redux/reducer/authenticationSlice";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.authentication);
  const [error, setError] = useState("");
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });

  const sumbitHandler = (e) => {
    e.preventDefault();
    if (
      userCredentials.password.length >= 9 &&
      userCredentials.password === userCredentials.confirmPassword
    ) {
      dispatch(signupHandler(userCredentials));
    } else if (userCredentials.password.length <= 9) {
      setError("Password required altest 9 Character");
    } else {
      setError("Password and Confirm Password does not match");
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/feedpage");
    }
  }, [token, navigate]);

  return (
    <>
      <div className="login-page flex flex-center">
        <form className="form" onSubmit={sumbitHandler}>
          <div className="login-heading">SIGN UP</div>
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            className="input"
            type="text"
            placeholder="Enter First Name"
            name="firstName"
            required
            value={userCredentials.firstName}
            onChange={(event) =>
              setUserCredentials({
                ...userCredentials,
                firstName: event.target.value,
              })
            }
          />
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            className="input"
            type="text"
            placeholder="Enter Last Name"
            name="lastName"
            required
            value={userCredentials.lastName}
            onChange={(event) =>
              setUserCredentials({
                ...userCredentials,
                lastName: event.target.value,
              })
            }
          />
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            className="input"
            type="text"
            placeholder="Enter Email"
            name="email"
            required
            value={userCredentials.email}
            onChange={(event) =>
              setUserCredentials({
                ...userCredentials,
                email: event.target.value,
              })
            }
          />
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <div className="show-hide-password">
            <input
              id="create-password"
              className="input"
              type="password"
              placeholder="Enter Password"
              name="password"
              required
              value={userCredentials.password}
              onChange={(event) =>
                setUserCredentials({
                  ...userCredentials,
                  password: event.target.value,
                })
              }
            />
            <div className="show-password" id="show-create-password">
              show
            </div>
          </div>

          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <div className="show-hide-password">
            <input
              id="confirm-password"
              className="input"
              type="password"
              placeholder="Enter Password"
              name="password"
              required
              value={userCredentials.confirmPassword}
              onChange={(event) =>
                setUserCredentials({
                  ...userCredentials,
                  confirmPassword: event.target.value,
                })
              }
            />
            <div className="show-password" id="show-confirm-password">
              show
            </div>
          </div>
          <div>{error}</div>
          <div className="login-store flex flex-space-between">
            <label htmlFor="store">
              <input type="checkbox" />I accept all terms & conditions
            </label>
          </div>

          <div className="form-btn">
            <button className="btn btn-primary btn-lg">
              Create New Account
            </button>
          </div>
          <div className="create-account flex flex-center">
            <Link to="/signin">
              <p>Already have an account? SignUp here</p>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export { Signup };
