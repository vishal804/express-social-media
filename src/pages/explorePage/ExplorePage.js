import React, { useState } from "react";
import "./explorePage.css";
import { useSelector } from "react-redux";
import { BottomNav, PostDisplay, SideNav } from "../../component";

const ExplorePage = () => {
  const { posts } = useSelector((store) => store.posts);
  let showPosts = posts;
  const [sortBy, setSortBy] = useState(showPosts);
  const latestPost = [...showPosts].reverse();

  return (
    <>
      <div className="feed-container">
        <SideNav />
        <div>
          <div className="show-posts">
            <button
              className="button-style"
              onClick={() => setSortBy(showPosts)}
            >
              Show trending
            </button>
            <button
              className="button-style"
              onClick={() => setSortBy(latestPost)}
            >
              Newest First
            </button>
            <button
              className="button-style"
              onClick={() => setSortBy(showPosts)}
            >
              Oldest First
            </button>
          </div>

          {sortBy.length !== 0 &&
            sortBy.map((postData) => {
              return <PostDisplay key={postData._id} postData={postData} />;
            })}
        </div>
      </div>
      <div className="bottom-nav-show">
        <BottomNav />
      </div>
    </>
  );
};

export { ExplorePage };
