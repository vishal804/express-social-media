import React from "react";
import "./landingPage.css";
import { Link } from "react-router-dom";
import { landingPageImage1 } from "../../assets";

const LandingPage = () => {
  return (
    <>
      <div className="main-container">
        <div className="right-side">
          <div className="title">
            Welcome to <span className="main-title">Social</span>
          </div>
          <div>
            <p className="sub-title">Connect with the friend</p>
            <p className="sub-title">Share what you think</p>
          </div>
          <div className="btn-container">
            <Link to="/signup">
              <button className="btn btn-primary btn-lg">Join Now</button>
            </Link>
          </div>
          <Link to="/signin">
            <div className="link-style">Already have Account? SignIn here</div>
          </Link>
        </div>
        <div className="left-side">
          <div className="image-container">
            <img
              className="image-style responsive-image"
              src={landingPageImage1}
              alt="Social"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export { LandingPage };
