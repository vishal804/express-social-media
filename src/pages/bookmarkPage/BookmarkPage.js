import React from "react";
import "./bookmarkPage.css";
import { useSelector } from "react-redux";
import { PostDisplay, SideNav } from "../../component";

const BookmarkPage = () => {
  const { bookmarks } = useSelector((store) => store.posts);

  return (
    <>
      <div className="feed-container">
        <SideNav />
        <main className="post-container">
          {bookmarks.length !== 0 ? (
            <>
              {bookmarks &&
                bookmarks.map((postData) => {
                  return <PostDisplay key={postData._id} postData={postData} />;
                })}
            </>
          ) : (
            <div className="statement">Save Posts for Later</div>
          )}
        </main>
      </div>
    </>
  );
};

export { BookmarkPage };
