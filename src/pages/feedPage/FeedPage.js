import React from "react";
import "./feedPage.css";
import { useSelector } from "react-redux";
import {
  BottomNav,
  FollowUnfollow,
  PostCreate,
  PostDisplay,
  SideNav,
} from "../../component";

const FeedPage = () => {
  const { users } = useSelector((store) => store.users);
  const { user } = useSelector((store) => store.authentication);
  const { posts, isLoading } = useSelector((store) => store.posts);

  return (
    <>
      <div className="feed-container">
        <SideNav />
        {isLoading ? (
          <div className="loading">
            <i className="fas fa-sync fa-spin fa-5x"></i>
          </div>
        ) : null}

        <main className="post-container">
          <PostCreate />

          <div>
            {posts.length !== 0 &&
              [...posts].reverse().map((postData) => {
                return <PostDisplay key={postData._id} postData={postData} />;
              })}
          </div>
        </main>
        <div className="leftside-nav">
          <FollowUnfollow users={users} user={user} />
        </div>
      </div>
      <div className="bottom-nav-show">
        <BottomNav />
      </div>
    </>
  );
};

export { FeedPage };
