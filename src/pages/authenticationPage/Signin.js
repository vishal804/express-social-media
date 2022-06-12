import React, { useEffect, useState } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginHandler } from "../../redux/reducer/authenticationSlice";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((store) => store.authentication);
  const [userInfo, setUserInfo] = useState({
    username: "steveroger",
    password: "steveroger",
  });

  const sumbitHandler = (e) => {
    e.preventDefault();
    dispatch(loginHandler(userInfo));
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
          <div className="login-heading">Login</div>

          <label htmlFor="username" className="form-label">
            Email
          </label>
          <input
            className="input"
            type="text"
            placeholder="Enter Email"
            name="username"
            value={setUserInfo.username}
            onChange={(event) =>
              setUserInfo({ ...userInfo, username: event.target.value })
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
              value={setUserInfo.password}
              onChange={(event) =>
                setUserInfo({ ...userInfo, password: event.target.value })
              }
            />
            <div className="show-password" id="show-create-password">
              show
            </div>
          </div>

          <div className="login-store flex flex-space-between">
            <label htmlFor="store">
              <input type="checkbox" />I accept all terms & conditions
            </label>
          </div>

          <div className="form-btn">
            <button className="btn btn-primary btn-lg">Login</button>
          </div>
          <button className="btn btn-primary btn-lg">Guest Login</button>
          <div className="create-account flex flex-center">
            <Link to="/signup">
              <p>Don't have account? Create now</p>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export { Signin };
