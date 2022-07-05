import React from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutHandler } from "../../redux/reducer/authenticationSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((store) => store.authentication);
  const logoutHandlerOne = () => {
    navigate("/");
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    dispatch(logoutHandler());
  };

  const loginHandler = () => {
    if (token) {
      logoutHandlerOne();
    }
  };

  return (
    <>
      <header className="navigationbar">
        <nav className="navbar box-shadow">
          <div className="left-navbar">
            <div className="logo">
              <Link to="/">Express</Link>
            </div>
          </div>

          <ul className="right-navbar">
            <li>
              {token ? (
                <Link to="/">
                  <button
                    className="no-show btn btn-link btn-style"
                    onClick={loginHandler}
                  >
                    Logout
                  </button>
                  <p onClick={loginHandler}>
                    <i class="show fas fa-sign-out-alt fa-2x"></i>
                  </p>
                </Link>
              ) : (
                <Link to="/signin">
                  <button
                    className="no-show btn btn-link btn-style"
                    onClick={loginHandler}
                  >
                    Login
                  </button>
                  <p onClick={loginHandler}>
                    <i class="show fas fa-sign-in-alt fa-2x"></i>
                  </p>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export { Header };
