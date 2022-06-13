import React, { useState } from "react";
import "./postDisplay.css";
import { useDispatch, useSelector } from "react-redux";
import { PostEditModal } from "../../component";
import {
  deletePost,
  likePost,
  dislikePost,
} from "../../redux/reducer/postsSlice";

const PostDisplay = ({ postData }) => {
  const {
    _id,
    content,
    likes: { likeCount, likedBy },
    profilePicture,
    username,
    firstName,
    lastName,
  } = postData;

  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);

  const { user } = useSelector((store) => store.authentication);

  const isLike = likedBy.some((userOne) => userOne.username === user.username);

  return (
    <>
      {isEdit ? <PostEditModal setIsEdit={setIsEdit} {...postData} /> : null}
      <div className="post">
        <div className="image-textarea">
          <img className="image" src={profilePicture} alt="ProfilePicture" />
          <div className="titlename">
            {firstName} {lastName}
            <span className="username">@{username}</span>
          </div>
        </div>
        <div className="post-content">
          <p>{content}</p>
        </div>
        <div className="post-icons">
          {isLike ? (
            <button onClick={() => dispatch(dislikePost(_id))}>
              <i className="fas fa-heart fa-lg"></i>
              <span style={{ fontSize: "1rem" }}> {likeCount}</span>
            </button>
          ) : (
            <button onClick={() => dispatch(likePost(_id))}>
              <i className="far fa-heart fa-lg"></i>

              <span style={{ fontSize: "1rem" }}> {likeCount}</span>
            </button>
          )}

          <button>
            <i className="far fa-comment fa-lg"></i>
            2K
          </button>
          <button>
            <i className="far fa-bookmark fa-lg"></i>
          </button>

          {user.username === username ? (
            <>
              <button onClick={() => setIsEdit(true)}>
                <i className=" fas fa-edit"></i>
              </button>
              <button
                onClick={() => {
                  dispatch(deletePost(_id));
                }}
              >
                <i className=" fas fa-trash"></i>
              </button>
            </>
          ) : null}
        </div>
        <hr></hr>
      </div>
    </>
  );
};

export { PostDisplay };
