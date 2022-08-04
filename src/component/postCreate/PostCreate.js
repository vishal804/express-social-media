import React, { useState } from "react";
import "./postCreate.css";
import { ErrorToast } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../redux/reducer/postsSlice";

const PostCreate = ({ isCreatePost, setIsCreatePost }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.authentication);
  const [postDetails, setPostDetails] = useState({ content: "" });

  const handleCreatePost = () => {
    if (postDetails.content.trim() === "") {
      ErrorToast("Can't create empty post");
    } else {
      dispatch(createPost(postDetails));
      setPostDetails({ content: "" });
    }
    if (isCreatePost === true) {
      setIsCreatePost(false);
    }
  };

  return (
    <>
      <div className="post-write">
        {isCreatePost ? (
          <div className="close-btn" onClick={() => setIsCreatePost(false)}>
            <i className="fas fa-times"></i>
          </div>
        ) : null}

        <div className="image-textarea">
          <img
            className="image"
            src={user.profilePicture}
            alt="ProfilePicture"
          />
          <textarea
            autoFocus
            type="text"
            placeholder="Express Yourself !"
            value={postDetails.content}
            onChange={(e) =>
              setPostDetails({ ...postDetails, content: e.target.value })
            }
          ></textarea>
        </div>

        <div>
          <button
            className="btn btn-primary btn-style"
            onClick={handleCreatePost}
          >
            Express
          </button>
        </div>
      </div>
    </>
  );
};

export { PostCreate };
