import React, { useState, useEffect } from "react";
import "./feedPage.css";
import { useDispatch, useSelector } from "react-redux";
import { PostDisplay, SideNav } from "../../component";
import { createPost, getPosts } from "../../redux/reducer/postsSlice";

const FeedPage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.authentication);
  const { posts, isLoading } = useSelector((store) => store.posts);
  const [postDetails, setPostDetails] = useState({ content: "" });

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <div className="feed-container">
        <SideNav />
        {isLoading ? (
          <div>
            <i className="fas fa-sync fa-spin"></i>
          </div>
        ) : null}
        <main className="post-container">
          <div className="post-write">
            <div className="image-textarea">
              <img
                className="image"
                src={user.profilePicture}
                alt="ProfilePicture"
              />
              <textarea
                type="text"
                placeholder="Express Yourself !"
                value={postDetails.content}
                onChange={(e) =>
                  setPostDetails({ ...postDetails, content: e.target.value })
                }
              ></textarea>
            </div>

            <div className="sm-navbar">
              <button
                className="btn btn-primary btn-style"
                onClick={() => {
                  dispatch(createPost(postDetails));
                  setPostDetails({ content: "" });
                }}
              >
                Express
              </button>
            </div>
          </div>

          <div>
            {posts.length !== 0 &&
              posts.map((postData) => {
                return <PostDisplay key={postData._id} postData={postData} />;
              })}
          </div>
        </main>
      </div>
    </>
  );
};

export { FeedPage };
