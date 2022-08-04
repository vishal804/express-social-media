import React, { useState } from "react";
import "./explorePage.css";
import { useSelector } from "react-redux";
import { BottomNav, PostDisplay, SideNav } from "../../component";

const ExplorePage = () => {
  const { posts } = useSelector((store) => store.posts);
  const [sortBy, setSortBy] = useState("oldest");

  const sortPosts = (postSort) => {
    if (postSort === "oldest") {
      return posts;
    }
    if (postSort === "newest") {
      return [...posts].reverse();
    }
    if (postSort === "trending") {
      return [...posts].sort((a, b) => {
        return b.likes.likeCount - a.likes.likeCount;
      });
    }
  };

  const sortedPosts = sortPosts(sortBy);

  return (
    <>
      <div className="feed-container">
        <SideNav />
        <div>
          <div className="show-posts">
            <button
              className="button-style"
              onClick={() => setSortBy("trending")}
            >
              Show trending
            </button>
            <button
              className="button-style"
              onClick={() => setSortBy("newest")}
            >
              Newest First
            </button>
            <button
              className="button-style"
              onClick={() => setSortBy("oldest")}
            >
              Oldest First
            </button>
          </div>

          {sortedPosts.length !== 0 &&
            sortedPosts.map((postData) => {
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
