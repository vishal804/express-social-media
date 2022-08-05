import React, { useState } from "react";
import "./sideNav.css";
import { Link } from "react-router-dom";
import { PostCreate } from "../postCreate/PostCreate";

const SideNav = () => {
  const [isCreatePost, setIsCreatePost] = useState(false);
  return (
    <>
      {isCreatePost ? (
        <div className="post-write-modal">
          <div className="post-write-container">
            <PostCreate
              isCreatePost={isCreatePost}
              setIsCreatePost={setIsCreatePost}
            />
          </div>
        </div>
      ) : null}
      <div className="sidebar">
        <div className="top-sidebar">
          <div className="sidebar-nav">
            <Link to="/feedpage" className="buttonlink-style">
              <span>
                <i className="fas fa-home fa-lg"></i>
              </span>
              Home
            </Link>
          </div>

          <div className="sidebar-nav">
            <Link to="/explore" className="buttonlink-style">
              <span>
                <i className="fas fa-hashtag fa-lg"></i>
              </span>
              Explore
            </Link>
          </div>

          <div className="sidebar-nav">
            <Link to="/bookmark" className="buttonlink-style">
              <span>
                <i className="far fa-bookmark fa-lg"></i>
              </span>
              Bookmarks
            </Link>
          </div>

          <div className="sidebar-nav">
            <Link to="/profile" className="buttonlink-style">
              <span>
                <i className="far fa-user fa-lg"> </i>
              </span>
              Profile
            </Link>
          </div>

          <div>
            <button
              className="btn btn-primary btn-lg"
              onClick={() => setIsCreatePost(true)}
            >
              Create New Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { SideNav };
