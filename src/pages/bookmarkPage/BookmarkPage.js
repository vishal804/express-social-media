import React from "react";
import "./bookmarkPage.css";
import { useSelector } from "react-redux";
import { BottomNav, PostDisplay, SideNav } from "../../component";

const BookmarkPage = () => {
  const { bookmarks, posts } = useSelector((store) => store.posts);
  const bookmarkPosts = posts.filter(({ _id }) => bookmarks.includes(_id));

  return (
    <>
      <div className="feed-container">
        <SideNav />
        <main className="post-container">
          {bookmarks.length !== 0 ? (
            <>
              {bookmarkPosts &&
                bookmarkPosts.map((postData) => {
                  return <PostDisplay key={postData._id} postData={postData} />;
                })}
            </>
          ) : (
            <div className="statement">Save Posts for Later</div>
          )}
        </main>
      </div>
      <div className="bottom-nav-show">
        <BottomNav />
      </div>
    </>
  );
};

export { BookmarkPage };
