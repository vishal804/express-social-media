import React, { useState } from "react";
import "./postEditModal.css";
import { useDispatch } from "react-redux";
import { editPost } from "../../redux/reducer/postsSlice";

const PostEditModal = ({ setIsEdit, _id, content, profilePicture }) => {
  const [postData, setPostData] = useState({ content });
  const dispatch = useDispatch();

  return (
    <>
      <div className="edit-post">
        <div className="editPost-container">
          <div className="close-btn" onClick={() => setIsEdit(false)}>
            <i className="fas fa-times"></i>
          </div>

          <div className="post-edit">
            <div className="image-textarea">
              <img
                className="image"
                src={profilePicture}
                alt={profilePicture}
              />

              <textarea
                className="post-edit-textarea"
                type="text"
                value={postData.content}
                onChange={(event) =>
                  setPostData({
                    ...postData,
                    content: event.target.value,
                  })
                }
              ></textarea>
            </div>

            <button
              className="btn"
              onClick={() => {
                dispatch(editPost({ postId: _id, postData }));
                setIsEdit(false);
              }}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { PostEditModal };
