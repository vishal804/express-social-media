import React from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutHandler } from "../../redux/reducer/authenticationSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((store) => store.authentication);
  const logoutHandler1 = () => {
    navigate("/");
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    dispatch(logoutHandler());
  };

  const loginHandler = () => {
    if (token) {
      logoutHandler1();
    }
  };

  return (
    <>
      <header className="nav">
        <nav className="navbar box-shadow">
          <div className="left-navbar">
            <div className="logo">
              <Link to="/">Express</Link>
            </div>
          </div>

          <ul className="right-navbar">
            <li className="no-show">
              {token ? (
                <Link to="/">
                  <button
                    className="btn btn-link btn-style"
                    onClick={loginHandler}
                  >
                    Logout
                  </button>
                </Link>
              ) : (
                <Link to="/signin">
                  <button
                    className="btn btn-link btn-style"
                    onClick={loginHandler}
                  >
                    Login
                  </button>
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
