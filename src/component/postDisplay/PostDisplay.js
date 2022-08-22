import React, { useState } from "react";
import "./postDisplay.css";
import { useDispatch, useSelector } from "react-redux";
import { PostEditModal, CommentEditModal } from "../../component";
import {
  deletePost,
  likePost,
  dislikePost,
  addToBookmarks,
  removeFromBookmarks,
  addComment,
  deleteComment,
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
    comments,
  } = postData;

  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [isCommentEdit, setIsCommentEdit] = useState(false);
  const { bookmarks } = useSelector((store) => store.posts);
  const { user } = useSelector((store) => store.authentication);
  const isBookmark =
    bookmarks && bookmarks.some((bookmarkId) => bookmarkId === _id);
  const isLike = likedBy.some((userOne) => userOne.username === user.username);

  const [comment, setComment] = useState("");
  const [showComment, setShowComment] = useState(false);

  const ShowComment = () =>
    showComment ? setShowComment(false) : setShowComment(true);

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
              <span> {likeCount}</span>
            </button>
          ) : (
            <button onClick={() => dispatch(likePost(_id))}>
              <i className="far fa-heart fa-lg"></i>

              <span> {likeCount}</span>
            </button>
          )}

          <button onClick={ShowComment}>
            <i className="far fa-comment fa-lg"></i>
            <span> {comments && comments.length}</span>
          </button>

          {isBookmark ? (
            <button onClick={() => dispatch(removeFromBookmarks(_id))}>
              <i className="fas fa-bookmark fa-lg"></i>
            </button>
          ) : (
            <button onClick={() => dispatch(addToBookmarks(_id))}>
              <i className="far fa-bookmark fa-lg"></i>
            </button>
          )}
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

        <div
          className="comment-section"
          style={showComment ? { display: "block" } : { display: "none" }}
        >
          {comments &&
            comments.map((comment) => (
              <div className="comment" key={comment._id}>
                <div className="comment-profile">
                  <img
                    className="comment-image"
                    src={comment.profilePicture}
                    alt="Profilepicture"
                  ></img>
                  <div className="comment-content">
                    <p className="comment-titlename">
                      {comment.firstName} {comment.lastName}
                    </p>
                    <p>{comment.text}</p>
                  </div>
                </div>

                {comment.username === user.username ? (
                  <div className="comment-option">
                    <p onClick={() => setIsCommentEdit(true)}>
                      <i className="icon-style fas fa-edit"></i>
                    </p>

                    {isCommentEdit ? (
                      <CommentEditModal
                        setIsCommentEdit={setIsCommentEdit}
                        postId={_id}
                        commentText={comment}
                      />
                    ) : null}

                    <p
                      onClick={() => {
                        dispatch(
                          deleteComment({ postId: _id, commentId: comment._id })
                        );
                      }}
                    >
                      <i className="icon-style fas fa-trash"></i>
                    </p>
                  </div>
                ) : null}
              </div>
            ))}

          <div className="comment-write">
            <input
              type="text"
              value={comment}
              placeholder="write comment"
              onChange={(event) => setComment(event.target.value)}
            ></input>
            <button
              disabled={comment.trim() === ""}
              onClick={() => {
                dispatch(addComment({ postId: _id, commentData: comment }));
                setComment("");
              }}
            >
              comment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { PostDisplay };
