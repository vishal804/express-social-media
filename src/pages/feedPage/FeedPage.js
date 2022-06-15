import React, { useState } from "react";
import "./feedPage.css";
import { useDispatch, useSelector } from "react-redux";
import { FollowUnfollow, PostDisplay, SideNav } from "../../component";
import { createPost } from "../../redux/reducer/postsSlice";

const FeedPage = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((store) => store.users);
  const { user } = useSelector((store) => store.authentication);
  const { posts, isLoading } = useSelector((store) => store.posts);
  const [postDetails, setPostDetails] = useState({ content: "" });

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
        <div className="leftside-nav">
          <FollowUnfollow users={users} user={user} />
        </div>
      </div>
    </>
  );
};

export { FeedPage };
