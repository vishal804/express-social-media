import React, { useState } from "react";
import "./profilePage.css";
import { useSelector } from "react-redux";
import {
  BottomNav,
  PostDisplay,
  ProfileEditModal,
  SideNav,
} from "../../component";

const ProfilePage = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { posts } = useSelector((store) => store.posts);
  const { user } = useSelector((store) => store.authentication);

  return (
    <>
      <div className="feed-container">
        <SideNav />
        <main className="post-container">
          {isEdit ? (
            <ProfileEditModal setIsEdit={setIsEdit} user={user} />
          ) : null}

          <div className="profile">
            <img
              src={user.profilePicture}
              alt="ProfilePicture"
              className="profile-image"
            />
            <div className="titlename">
              {user.firstName} {user.lastName}
            </div>
            <button
              className="btn btn-primary btn-style"
              onClick={() => setIsEdit(true)}
            >
              Edit Profile
            </button>
            <p>{user.bio}</p>
            <p className="website">
              <a
                rel="noreferrer"
                className="user-website"
                target="_blank"
                href={user.link}
              >
                {user.link}
              </a>
            </p>
            <div className="followers-details">
              <div>
                <p className="follow">{user.following.length}</p>
                <p>Following</p>
              </div>
              <div>
                <p className="follow">
                  {
                    posts.filter(
                      (userPost) => userPost.username === user.username
                    ).length
                  }
                </p>
                <p>Posts</p>
              </div>
              <div>
                <p className="follow">{user.followers.length}</p>
                <p>Followers</p>
              </div>
            </div>
          </div>

          <section>
            <p className="text-style">Your Posts</p>

            {[...posts]
              .reverse()
              .map((userPost) =>
                userPost.username === user.username ? (
                  <PostDisplay key={userPost._id} postData={userPost} />
                ) : null
              )}
          </section>
        </main>
      </div>
      <div className="bottom-nav-show">
        <BottomNav />
      </div>
    </>
  );
};

export { ProfilePage };
