import React, { useState } from "react";
import "./commentEditModal.css";
import { useDispatch } from "react-redux";
import { editComment } from "../../redux/reducer/postsSlice";

const CommentEditModal = ({ setIsCommentEdit, postId, commentText }) => {
  const dispatch = useDispatch();
  const [commentEdit, setCommentEdit] = useState(commentText);

  return (
    <>
      <div className="edit-comment">
        <div className="editComment-container">
          <div className="close-btn" onClick={() => setIsCommentEdit(false)}>
            <i className="fas fa-times"></i>
          </div>

          <div className="comment-edit">
            <div className="comment-write">
              <input
                type="text"
                value={commentEdit.text}
                onChange={(event) =>
                  setCommentEdit({ ...commentText, text: event.target.value })
                }
              ></input>
              <button
                onClick={() => {
                  dispatch(
                    editComment({
                      postId: postId,
                      commentId: commentText._id,
                      commentData: commentEdit,
                    })
                  );
                  setIsCommentEdit(false);
                }}
              >
                update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { CommentEditModal };
