import React from "react";
import "./bottomNav.css";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <>
      <div className="bottom-nav">
        <div>
          <Link to="/feedpage">
            <i className="fas fa-home fa-lg"></i>
          </Link>
        </div>

        <div>
          <Link to="/explore">
            <i className="fas fa-hashtag fa-lg"></i>
          </Link>
        </div>

        <div>
          <Link to="/bookmark">
            <i className="far fa-bookmark fa-lg"></i>
          </Link>
        </div>

        <div>
          <Link to="/profile">
            <i className="far fa-user fa-lg"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export { BottomNav };
